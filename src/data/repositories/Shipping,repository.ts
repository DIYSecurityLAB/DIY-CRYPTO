import { z } from 'zod';
import { ExceptionHandler } from '../../utils/decorators/ExceptionHandler';
import { DefaultResultError, Result } from '../../utils/Result';
import { RemoteDataSource } from '../datasource/Remote.datasource';
import {
  CalculatedShippingModel,
  CalculateShippingModel,
} from '../model/Shipping.model';

type CalculateReq = CalculateShippingModel;

type CalculateRes = Promise<
  Result<
    CalculatedShippingModel[],
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
    const result = await this.api.post({
      url: `/shipping/calculate`,
      model: z.array(CalculatedShippingModel),
      body: req,
    });

    if (!result) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    return Result.Success(result);
  }
}
