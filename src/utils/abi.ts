import cfxAddress from '@conflux-dev/conflux-address-js';
import { encode as encodeAbi } from '@findeth/abi';

const ADDRESS = 'address';

/**
 * Encode the values with the provided types.
 *
 * @param {Buffer} types
 * @param {unknown[]} values
 */
export const encode = (types: string[], values: unknown[]): Buffer => {
  values.map(function (v, i, origin) {
    if (types[i] === ADDRESS) {
      origin[i] = normalizeAddress(v);
    }
  });
  return Buffer.from(encodeAbi(types, values));
};

function normalizeAddress(address: any) {
  if (!cfxAddress.hasNetworkPrefix(address)) {
    return address;
  }
  return '0x' + cfxAddress.decode(address).hexAddress.toString('hex');
}
