import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import { lightTheme } from "../themes/theme";
import { MetaMaskContextProvider } from "hooks/useMetaMask";
import { createPublicClient, http } from "viem";
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { goerli, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'


const MyApp = ({ Component, pageProps }: AppProps) => {

  const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: goerli,
      transport: http(),
    }),
  });
  return (
    <WagmiConfig config={config}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle theme={lightTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </WagmiConfig>
  );
};

export default MyApp;
