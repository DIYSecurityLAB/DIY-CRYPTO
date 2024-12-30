import { AddressRepository } from '../../../data/repositories/Address.repository';
import { ValidateInputs } from '../../../utils/decorators/ValidationInput.decorator';
import { DefaultResultError, Result } from '../../../utils/Result';
import { UseCase } from '../../../utils/UseCase';
import { ListAddress, ListedAddress } from '../../entities/Address.entity';

export type ListReq = ListAddress;

export type ValidateRes = Promise<
  Result<
    ListedAddress,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { code: 'SERIALIZATION'; payload: any } | DefaultResultError
  >
>;

export type ListAddressUseCase = UseCase<ListReq, ValidateRes>;

export class ListAddressUseCaseImpl implements ListAddressUseCase {
  constructor(private repository: AddressRepository) {}

  @ValidateInputs([ListAddress])
  async execute(req: ListReq): ValidateRes {
    const { result } = await this.repository.list({
      postalCode: req.postalCode,
    });

    if (result.type === 'ERROR') {
      switch (result.error.code) {
        case 'SERIALIZATION':
          return Result.Error({
            code: 'SERIALIZATION',
            payload: 'ERRO DE VALIDAÇÃO',
          });
        default:
          return Result.Error({ code: 'UNKNOWN' });
      }
    }

    return Result.Success(ListedAddress.fromModel(result.data));
  }
}
