"use client"

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

interface ProviderProps {
    children: React.ReactNode
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
  )
   
  // Set up wagmi config
  const config = createConfig({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: '...',
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
    publicClient,
    webSocketPublicClient,
  })

const ClientWagmiProvider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <WagmiConfig config={config}>
            {children}
        </WagmiConfig>
    )
}

export default ClientWagmiProvider