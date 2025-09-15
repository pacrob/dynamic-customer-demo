'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { DynamicContextProvider } from "@/lib/dynamic";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { config } from "@/lib/wagmi";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";


export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >   
      <DynamicContextProvider
          theme="light"
          settings={{
            environmentId:
              // replace with your own environment ID
              process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID ||
              "2762a57b-faa4-41ce-9f16-abff9300e2c9",
            walletConnectors: [
              EthereumWalletConnectors,
              SolanaWalletConnectors,
              ZeroDevSmartWalletConnectors,
            ],
          }}
        >
        
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <DynamicWagmiConnector>
              {children}
            </DynamicWagmiConnector>
          </QueryClientProvider>
        </WagmiProvider>
        
      </DynamicContextProvider>
    </ThemeProvider>
  );
}