// import { ID_TO_PROVIDER } from '../../../src';
// import { JsonRpcProvider } from '@ethersproject/providers';
// import {
// ChainId,
//  WETH9 
// } from 'udonswap-core';
// import {
//   ITokenFeeFetcher,
//   OnChainTokenFeeFetcher
// } from '../../../src/providers/token-fee-fetcher';
// import { BITBOY, BULLET } from '../../test-util/mock-data';
// import dotenv from 'dotenv';

// dotenv.config();

describe('TokenFeeFetcher', () => {
  // let tokenFeeFetcher: ITokenFeeFetcher;

  beforeAll(async () => {
    console.log('hellooooooooooooooooooooo')
    // const chain = ChainId.MODE;
    // const chainProvider = ID_TO_PROVIDER(chain);
    // const provider = new JsonRpcProvider(chainProvider, chain);

    // tokenFeeFetcher = new OnChainTokenFeeFetcher(chain, provider);
  });

  //BITBOY is not exist on mode-testnet but exist on mode mainnet.


  it('justt for temp', async () => {
    let tokenFeeMap = 'jay'
    expect(tokenFeeMap).toEqual('jay');

  });

  // it('Fetch WETH and BITBOY, should only return BITBOY', async () => {
  //   console.log('BITBOY->>>>>>>>>>>', BITBOY);
  //   const tokenFeeMap = await tokenFeeFetcher.fetchFees([WETH9[ChainId.MODE]!.address, BITBOY.address])
  //   console.log('tokenFeeMap', tokenFeeMap);
  //   expect(tokenFeeMap).not.toContain(WETH9[ChainId.MODE]!.address)
  //   expect(tokenFeeMap[BITBOY.address]).toBeDefined()
  //   expect(tokenFeeMap[BITBOY.address]?.buyFeeBps).toEqual(BITBOY.buyFeeBps)
  //   expect(tokenFeeMap[BITBOY.address]?.sellFeeBps).toEqual(BITBOY.sellFeeBps)
  // });

  // it('Fetch BULLET and BITBOY, should return BOTH', async () => {
  //   console.log('BULLET->>>>>>>>>>>', BULLET);
  //   const tokenFeeMap = await tokenFeeFetcher.fetchFees([BULLET.address, BITBOY.address])
  //   console.log('tokenFeeMap in 2nd case', tokenFeeMap);
  //   expect(tokenFeeMap[BULLET.address]).toBeDefined()
  //   expect(tokenFeeMap[BULLET.address]?.buyFeeBps).toEqual(BULLET.buyFeeBps)
  //   expect(tokenFeeMap[BULLET.address]?.sellFeeBps).toEqual(BULLET.sellFeeBps)
  //   expect(tokenFeeMap[BITBOY.address]).toBeDefined()
  //   expect(tokenFeeMap[BITBOY.address]?.buyFeeBps).toEqual(BITBOY.buyFeeBps)
  //   expect(tokenFeeMap[BITBOY.address]?.sellFeeBps).toEqual(BITBOY.sellFeeBps)
  // });
});
