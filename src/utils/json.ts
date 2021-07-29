import { is } from 'superstruct';
import { CIP_23_TYPED_DATA_TYPE, TypedData } from '../types';

/**
 * Validates that `data` matches the EIP-712 JSON schema.
 *
 * @param {any} data
 * @return {boolean}
 */
export const validateTypedData = (data: unknown): data is TypedData => {
  return is(data, CIP_23_TYPED_DATA_TYPE);
};
