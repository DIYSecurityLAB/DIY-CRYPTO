import { z } from 'zod';
import { PaymentMethod } from '../../domain/entities/payment.entity';
import { ExceptionHandler } from '../../utils/decorators/ExceptionHandler';
import { DefaultResultError, Result } from '../../utils/Result';
import { EfiDatasource } from '../datasource/Efi.datasource';
import { RemoteDataSource } from '../datasource/Remote.datasource';
import {
  ChargedBTCModel,
  ChargedPIXModel,
  CreatedCheckoutModel,
  GeneratedPaymentTokenModel,
  GeneratePaymentTokenModel,
  GetCheckoutModel,
  IdentifyBrandModel,
  InstallmentsResponseModel,
  ListInstallmentsModel,
  PaymentAPIResponse,
} from '../model/Payment.model.';

export type CreateReq = GetCheckoutModel;

export type CreateRes = Promise<
  Result<
    | CreatedCheckoutModel
    | PaymentAPIResponse
    | ChargedPIXModel
    | ChargedBTCModel
    | { reorder_url: string } // Adicionado o tipo de resposta YAMPI
    | { payUrl: string },
    { code: 'SERIALIZATION' } | DefaultResultError
  >
>;

type IdentifyBrandReq = IdentifyBrandModel;
type IdentifyBrandRes = Promise<Result<string, DefaultResultError>>;

type ListInstallmentsReq = ListInstallmentsModel;
type ListInstallmentsRes = Promise<
  Result<
    InstallmentsResponseModel,
    { code: 'VALUE_TOO_LOW' } | DefaultResultError
  >
>;

type GeneratePaymentTokenReq = GeneratePaymentTokenModel;
type GeneratePaymentTokenRes = Promise<
  Result<GeneratedPaymentTokenModel, DefaultResultError>
>;

export interface PaymentRepository {
  create(req: CreateReq, method: PaymentMethod): CreateRes;
  identifyBrand(req: IdentifyBrandReq): IdentifyBrandRes;
  listInstallments(req: ListInstallmentsReq): ListInstallmentsRes;
}

export class PaymentRepositoryImpl implements PaymentRepository {
  constructor(
    private api: RemoteDataSource,
    private efiDatasource: EfiDatasource,
  ) {}

  @ExceptionHandler()
  async create(req: CreateReq, method: PaymentMethod): CreateRes {
    let paymentToken: string | undefined;

    if (method === 'EFI' && req.paymentOption === 'creditCard') {
      const { result: GeneratedToken } = await this.generatePaymentToken({
        brand: req.brand,
        cvv: req.cvv,
        expirationMonth: req.expirationMonth,
        expirationYear: req.expirationYear,
        number: req.cardNumber,
        reuse: false,
      });

      if (GeneratedToken.type === 'ERROR') {
        return Result.Error({ code: 'UNKNOWN' });
      }

      paymentToken = GeneratedToken.data.payment_token;
    }

    const modelToValidate = this.getModelToValidate(method, req.paymentOption);
    const result = await this.api.post({
      url: `/create-payment/${method}`,
      model: modelToValidate,
      body: {
        payerEmail: req.payerEmail,
        firstName: req.firstName,
        lastName: req.lastName,
        identification: req.identification,
        couponCode: req.couponCode,
        address: req.address,
        items: req.items,
        phone: req.phone,
        selectInstallments: req.selectInstallments,
        birthday: req.birthday,
        paymentToken: paymentToken,
        paymentOption: req.paymentOption,
        shipping: req.shipping,
      },
    });

    if (!result) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    return Result.Success(result);
  }

  async identifyBrand(req: IdentifyBrandReq): IdentifyBrandRes {
    const { result } = await this.efiDatasource.identifyBrand(req);

    if (result.type == 'ERROR') {
      return Result.Error({ code: 'UNKNOWN' });
    }

    return Result.Success(result.data);
  }

  async listInstallments(req: ListInstallmentsReq): ListInstallmentsRes {
    const { result } = await this.efiDatasource.listInstallments(req);

    if (result.type == 'ERROR') {
      switch (result.error.code) {
        case 'VALUE_TOO_LOW':
          return Result.Error({ code: 'VALUE_TOO_LOW' });
        default:
          return Result.Error({ code: 'UNKNOWN' });
      }
    }

    return Result.Success(result.data);
  }

  private async generatePaymentToken(
    req: GeneratePaymentTokenReq,
  ): GeneratePaymentTokenRes {
    try {
      const { result } = await this.efiDatasource.generatePaymentToken(req);

      if (result.type == 'ERROR') {
        return Result.Error({ code: 'UNKNOWN' });
      }

      return Result.Success(result.data);
    } catch (error) {
      console.error(error);
      return Result.Error({ code: 'UNKNOWN' });
    }
  }

  private getModelToValidate(
    method: PaymentMethod,
    paymentOption?: 'creditCard' | 'pix' | 'BTC' | 'YAMPI' | 'PAGBANK',
  ) {
    switch (method) {
      case 'MP':
        return CreatedCheckoutModel;
      case 'EFI':
        if (paymentOption === 'creditCard') {
          return PaymentAPIResponse;
        }
        if (paymentOption === 'BTC') {
          return ChargedBTCModel;
        }
        return ChargedPIXModel;
      case 'BTC':
        return ChargedBTCModel;
      case 'YAMPI':
        return z.object({ reorder_url: z.string().url() });
      case 'PAGBANK':
        return z.object({ payUrl: z.string().url() });
      default:
        throw new Error('Método de pagamento não suportado');
    }
  }
}
