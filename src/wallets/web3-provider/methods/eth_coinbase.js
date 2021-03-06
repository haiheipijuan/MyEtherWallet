import { toPayload } from './jsonrpc';
export default async ({ payload, store }, res, next) => {
  if (payload.method !== 'eth_coinbase') return next();
  res(null, toPayload(payload.id, store.state.wallet.getAddressString()));
};
