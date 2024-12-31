import { describe, expect, test } from 'vitest';
import { Result } from '../utils/Result';
import { Http } from './HttpClient';

describe('Http', () => {
  test('should be able to return NETWORK_ERROR for EAI_AGAIN error code', async () => {
    const error = { code: 'EAI_AGAIN' } as Error & { code: string };

    const result = await Http.checkError(error);

    expect(result).toEqual(Result.Error({ code: 'NETWORK_ERROR' }));
  });

  test('should be able to return undefined for unknown error code', async () => {
    const error = { code: 'UNKNOWN_CODE' } as Error & { code: string };

    const result = await Http.checkError(error);

    expect(result).toBeUndefined();
  });

  test('should be able to return undefined if error does not have a code', async () => {
    const error = new Error('Some random error');

    const result = await Http.checkError(error);

    expect(result).toBeUndefined();
  });
});
