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
    const result = await this.api.post({
      url: `/kangu/freight`,
      model: CalculatedShippingModel, // Define o modelo de validação da resposta
      body: req, // Corpo da requisição enviado no formato esperado
    });

    if (!result) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    return Result.Success(result);
  }
}
