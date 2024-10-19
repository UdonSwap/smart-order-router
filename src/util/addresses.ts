import {
  ChainId,
  CHAIN_TO_ADDRESSES_MAP,
  SWAP_ROUTER_02_ADDRESSES as SWAP_ROUTER_02_ADDRESSES_HELPER,
  Token,
} from 'lampros-core';

// import { NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';

export const MODE_TICK_LENS_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].tickLensAddress;

export const MODE_NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].nonfungiblePositionManagerAddress;

export const MODE_SWAP_ROUTER_02_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].swapRouter02Address!;

export const MODE_V3_MIGRATOR_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].v3MigratorAddress;

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.MODE]: CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].v3CoreFactoryAddress,
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  [ChainId.MODE]: CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].quoterAddress,
};

// export const NEW_QUOTER_V2_ADDRESSES: AddressMap = {
//   [ChainId.MODE]: '0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3',

// };

// export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]:
//     CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].mixedRouteQuoterV1Address,
//   [ChainId.GOERLI]:
//     CHAIN_TO_ADDRESSES_MAP[ChainId.GOERLI].mixedRouteQuoterV1Address,
// };

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  [ChainId.MODE]: CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].multicallAddress,
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number): string => {
  return (
    SWAP_ROUTER_02_ADDRESSES_HELPER(chainId) ??
    '0x22dc8CA232debF877eFF0628FF9215519e8083f4'
  );
};

export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';

export const TICK_LENS_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].tickLensAddress;

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].nonfungiblePositionManagerAddress;

export const V3_MIGRATOR_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MODE].v3MigratorAddress;

export const MULTICALL2_ADDRESS = '0x338d2F65468A2Ac6D51Af94BE3A45858a21e6615';

export type AddressMap = { [chainId: number]: string | undefined };

export const WETH9 = {
  [ChainId.MODE]: new Token(
    ChainId.MODE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};

// export const BEACON_CHAIN_DEPOSIT_ADDRESS =
//   '0x00000000219ab540356cBB839Cbe05303d7705Fa';
