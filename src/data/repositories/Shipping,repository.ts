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
      const result: CalculatedShippingModel = {
        quotes: [
          {
            name: 'Frete Grátis',
            service: 'Frete Grátis',
            price: 0.01,
            days: 10,
            logo_url: 'https://i.imgur.com/QD6DckW.png',
            quote_id: 0,
          },
        ],
      };

      return Result.Success(result);
    }

    const result = await this.api.post({
      url: `/kangu/freight`,
      model: CalculatedShippingModel,
      body: req,
    });

    if (!result) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    console.log(result);

    return Result.Success(result);
  }
}
