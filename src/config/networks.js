import { BSCTestnet, Mainnet } from '@usedapp/core'

export const networkConfig = {
  readOnlyChainId: Mainnet.chainId,
  autoConnect: true,
  readOnlyUrls: {
    [Mainnet.chainId]:"https://rpc.ankr.com/eth",
    // [BSCTestnet.chainId]: BSCTestnet.rpcUrl,
  },
  networks: [Mainnet],
  noMetamaskDeactivate: true,
  refresh: 'never',
  pollingInterval: 15000,
}
