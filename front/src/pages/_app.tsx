import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import { lightTheme } from "../themes/theme";
import { MetaMaskContextProvider } from "hooks/useMetaMask";
import { createPublicClient, http } from "viem";
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { polygonMumbai, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { UserProvider } from 'context';
import { useState, useEffect } from "react";
import { InjectedConnector } from 'wagmi/connectors/injected'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  publicClient,
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // const config = createConfig({
  //   autoConnect: true,
  //   publicClient: createPublicClient({
  //     chain: polygonMumbai,
  //     transport: http(),
  //   }),
  // });
  return (
    <UserProvider>
      <ThemeProvider theme={lightTheme}>
        <WagmiConfig config={config}>
          <GlobalStyle theme={lightTheme} />
          {isClient && <Component {...pageProps} />}
        </WagmiConfig>
      </ThemeProvider>
    </UserProvider>
  );
};

export default MyApp;
