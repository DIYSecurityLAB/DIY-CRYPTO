import { CalculatedShippingModel } from '@/data/model/Shipping.model';
import { ShippingRepository } from '@/data/repositories/Shipping,repository';
import { DefaultResultError, Result } from '../../../utils/Result';
import { UseCase } from '../../../utils/UseCase';
import {
  CalculateShipping,
  CalculatedShipping,
} from '../../entities/Shipping.entity';

export type CalculateReq = CalculateShipping;

export type CalculateRes = Promise<
  Result<CalculatedShipping[], { code: 'SERIALIZATION' } | DefaultResultError>
>;

export type CalculateShippingUseCase = UseCase<CalculateReq, CalculateRes>;

export class CalculateShippingUseCaseImpl implements CalculateShippingUseCase {
  constructor(private repository: ShippingRepository) {}

  async execute(req: CalculateReq): CalculateRes {
    const { result } = await this.repository.calculate(
      CalculateShipping.toModel(req),
    );

    if (result.type === 'ERROR') {
      switch (result.error.code) {
        case 'SERIALIZATION':
          return Result.Error({ code: 'SERIALIZATION' });
        default:
          return Result.Error({ code: 'UNKNOWN' });
      }
    }

    // Usar todas as cotações retornadas pela API sem filtro
    const shippingOptions = result.data.quotes;

    return Result.Success(
      shippingOptions
        .filter(
          (item): item is CalculatedShippingModel['quotes'][number] =>
            item !== undefined,
        )
        .map((item) => CalculatedShipping.fromModel(item)),
    );
  }
}
