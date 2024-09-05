import { walletProvider } from './wallet-provider';

describe('walletProvider', () => {
  it('should work', () => {
    expect(walletProvider()).toEqual('wallet-provider');
  });
});
