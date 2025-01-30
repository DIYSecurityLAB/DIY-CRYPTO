import { ExceptionHandler } from '../../utils/decorators/ExceptionHandler';
import { DefaultResultError, Result } from '../../utils/Result';
import { RemoteDataSource } from '../datasource/Remote.datasource';
import {
  CalculateShippingModel,
  CalculatedShippingModel,
} from '../model/Shipping.model';

type CalculateReq = CalculateShippingModel;

type CalculateRes = Promise<
  Result<
    CalculatedShippingModel,
    { code: 'SERIALIZATION' } | DefaultResultError
  >
>;

export interface ShippingRepository {
  calculate(req: CalculateReq): CalculateRes;
}

export class ShippingRepositoryImpl implements ShippingRepository {
  constructor(private api: RemoteDataSource) {}

  @ExceptionHandler()
  async calculate(req: CalculateReq): CalculateRes {
    if (req.amount >= 1000) {
      return Result.Success({
        quotes: [
          {
            name: 'Frete Grátis',
            service: 'Frete Grátis',
            price: 0.0,
            days: 10,
            logo_url: 'https://i.imgur.com/QD6DckW.png',
            quote_id: 0,
          },
        ],
      });
    }

    const result = await this.api.post({
      url: `/kangu/freight`,
      model: CalculatedShippingModel,
      body: req,
    });

    if (!result) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    return Result.Success(result);
  }
}
