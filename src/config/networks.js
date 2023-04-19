import { Mainnet } from '@usedapp/core'

export const networkConfig = {
  readOnlyChainId: Mainnet.chainId,
  autoConnect: true,
  readOnlyUrls: {
    [Mainnet.chainId]: Mainnet.rpcUrl,
  },
  networks: [Mainnet],
  noMetamaskDeactivate: true,
  refresh: 'never',
  pollingInterval: 15000,
}
