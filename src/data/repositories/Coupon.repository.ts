import { ExceptionHandler } from '../../utils/decorators/ExceptionHandler';
import { DefaultResultError, Result } from '../../utils/Result';
import { RemoteDataSource } from '../datasource/Remote.datasource';
import {
  ValidateCouponModel,
  ValidatedCouponModel,
} from '../model/Coupon.model';

export type ValidateReq = ValidateCouponModel;

export type ValidateRes = Promise<
  Result<
    ValidatedCouponModel,
    { code: 'NOT_FOUND' } | { code: 'SERIALIZATION' } | DefaultResultError
  >
>;

export interface CouponRepository {
  validate(req: ValidateReq): ValidateRes;
}

export class CouponRepositoryImpl implements CouponRepository {
  constructor(private api: RemoteDataSource) {}

  @ExceptionHandler()
  async validate(req: ValidateReq): ValidateRes {
    const result = await this.api.post({
      url: `/coupons/is-valid`,
      model: ValidatedCouponModel,
      body: req,
    });

    if (!result) {
      return Result.Error({ code: 'SERIALIZATION' });
    }

    return Result.Success(result);
  }
}
