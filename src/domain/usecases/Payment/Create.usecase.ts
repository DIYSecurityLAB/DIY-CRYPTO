import { format, getYear, parse } from 'date-fns';
import { PaymentRepository } from '../../../data/repositories/Payment.repository';
import { DefaultResultError, Result } from '../../../utils/Result';
import { UseCase } from '../../../utils/UseCase';
import {
  ChargedBTC,
  ChargedPIX,
  CreatedCheckout,
  GetCheckout,
  Installment,
  PaymentApiResponse,
} from '../../entities/payment.entity';

export type CreateReq = GetCheckout;

export type CreateRes = Promise<
  Result<
    CreatedCheckout | PaymentApiResponse | ChargedPIX | ChargedBTC | { payUrl: string } | { reorder_url: string },
    { code: 'SERIALIZATION' } | DefaultResultError
  >
>;


export type CreatePaymentUseCase = UseCase<CreateReq, CreateRes>;

export class CreatePaymentUseCaseImpl implements CreatePaymentUseCase {
  constructor(private repository: PaymentRepository) {}

  async execute(req: CreateReq): CreateRes {
    const validationResult = GetCheckout.safeParse(req);

    if (!validationResult.success) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    const parsedResult = validationResult.data;

    const parsedInstallments = parsedResult.installments.map((item) =>
      Installment.toModel(item),
    );

    const expiryDate = parsedResult.expiryDate;

    const [expirationMonth, expirationYear] = expiryDate.split('/');

    const currentYear = getYear(new Date());
    const currentCentury = Math.floor(currentYear / 100);

    const fullExpirationYear = `${currentCentury}${expirationYear}`;

    const parsedDate = parse(parsedResult.birthday, 'dd/MM/yyyy', new Date());

    const parsedBirthday = format(parsedDate, 'yyyy-MM-dd');

    const shipping = Array.isArray(parsedResult.shipping) 
    ? parsedResult.shipping.map(item => ({
        ...item,
        logo_url: item.logoUrl, // Aqui fazemos a correção
      }))
    : [{ ...parsedResult.shipping, logo_url: parsedResult.shipping.logoUrl }];
  

    const { result } = await this.repository.create(
      {
        address: parsedResult.address,
        firstName: parsedResult.firstName,
        identification: parsedResult.identification,
        items: parsedResult.items,
        lastName: parsedResult.lastName,
        payerEmail: parsedResult.payerEmail,
        phone: parsedResult.phone,
        couponCode: parsedResult.couponCode,
        brand: parsedResult.brand,
        cardName: parsedResult.cardName,
        cardNumber: parsedResult.cardNumber,
        cvv: parsedResult.cvv,
        installments: parsedInstallments,
        selectInstallments: parsedResult.selectInstallments,
        total: parsedResult.total,
        expirationMonth,
        expirationYear: fullExpirationYear,
        birthday: parsedBirthday,
        paymentOption: parsedResult.paymentOption,
        shipping: shipping,
      },
      req.method,
    );

    if (result.type === 'ERROR') {
      switch (result.error.code) {
        case 'SERIALIZATION':
          return Result.Error({ code: 'SERIALIZATION' });
        default:
          return Result.Error({ code: 'UNKNOWN' });
      }
    }

    if ('initPoint' in result.data) {
      return Result.Success(CreatedCheckout.fromModel(result.data));
    }

    if ('checkoutLink' in result.data) {
      return Result.Success(ChargedBTC.fromModel(result.data));
    }

    if ('payUrl' in result.data) {  
      return Result.Success({ payUrl: result.data.payUrl });
    }
  
    if ('reorder_url' in result.data) {  
      return Result.Success({ reorder_url: result.data.reorder_url });
    }

    return Result.Success(result.data);
  }
}
