# UdonSwap Smart Order Router

This repository contains routing logic for the Udonswap V3 protocol.

It searches for the most efficient way to swap token A for token B, considering splitting swaps across multiple routes and gas costs.

## Testing

### Unit Tests

First make sure you have run `npm install` and `npm run build`.

```
npm run test
```

### Integration Tests

Make sure the `.env` file is configured to connect to mainnet and other chains. See the [CLI](#cli) section below for more details.

```
npm run integ-test
```

### Tenderly Simulations

Quotes can be simulated on Tenderly

Ensure you set the following environment variables:

```
process.env.TENDERLY_BASE_URL!,
process.env.TENDERLY_USER!,
process.env.TENDERLY_PROJECT!,
process.env.TENDERLY_ACCESS_KEY!,
```

### CLI

The package can be run as a CLI for testing purposes.

First create a `.env` file in the root of the project and configure:

```
JSON_RPC_PROVIDER = '<JSON_RPC_PROVIDER>'
```

To run on chains other than mainnet set up a connection by specifying the environment variable

```
JSON_RPC_PROVIDER_MODE = '<JSON_RPC_PROVIDER>'
```

Then from the root directory you can execute the CLI.

## MODE

```
./bin/cli quote --tokenIn 0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA --tokenOut 0x4200000000000000000000000000000000000006 --amount 10 --exactIn --minSplits 1 --protocols v3 --router alpha --chainId 919
```

## Adding a new Chain

The main components to complete are:

- Deploy contracts on chain, add the pools to subgraph
- Populate v3 providers in `src/providers/v3/subgraph-provider` and `src/providers/v3/static-subgraph-provider`
- Populate chainId and addresses in `src/util/chains.ts` and `src/util/addresses.ts`
- Populate token providers in `src/providers/caching-token-provider` and `src/providers/token-provider.ts`
- Populate gas constants in `src/routers/alpha-router/gas-models/*`
- Populate bases in `src/routers/legacy-router/bases.ts`
- Populate `test/integ/routers/alpha-router/alpha-router.integration.test.ts` and `src/providers/v2/static-subgraph-provider.ts`
- Populate `src/routers/alpha-router/*`
- Add a log to `/CHANGELOG.md`
- Run `npm run integ-test` successfully
