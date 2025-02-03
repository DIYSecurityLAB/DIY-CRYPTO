import { ExceptionHandler } from '../../utils/decorators/ExceptionHandler';
import { DefaultResultError, Result } from '../../utils/Result';
import { RemoteDataSource } from '../datasource/Remote.datasource';
import { ListAddressModel, ListedAddressModel } from '../model/Address.model';

export type ListReq = ListAddressModel;

export type ValidateRes = Promise<
  Result<ListedAddressModel, { code: 'SERIALIZATION' } | DefaultResultError>
>;

export interface AddressRepository {
  list(req: ListReq): ValidateRes;
}

export class AddressRepositoryImpl implements AddressRepository {
  constructor(private api: RemoteDataSource) {}

  @ExceptionHandler()
  async list(req: ListReq): ValidateRes {
    this.api.setHeaders('Authorization', import.meta.env.VITE_API_TOKEN);

    const result = await this.api.post({
      url: `/address/list`,
      model: ListedAddressModel,
      body: req,
    });

    if (!result) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    return Result.Success(result);
  }
}
