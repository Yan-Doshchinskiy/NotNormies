import './App.scss';
import React, { useMemo } from 'react';
// import * as anchor from '@project-serum/anchor';
import routes from 'routes/routes';
import { useRoutes } from 'hookrouter';

import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';
import Layout from "./components/Layout/Layout";
// import Home from './pages/Home/Home';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

// const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
//   try {
//     const machineId = process.env.REACT_APP_CANDY_MACHINE_ID as string;
//     return new anchor.web3.PublicKey(
//         machineId,
//     );
//   } catch (e) {
//     // console.log('Failed to construct CandyMachineId', e);
//   }
// };

// const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
// const connection = new anchor.web3.Connection(rpcHost || anchor.web3.clusterApiUrl('devnet'));

// const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
// const txTimeoutInMilliseconds = 30000;
console.log('ENVS', network, rpcHost, process.env.REACT_APP_CANDY_START_DATE);

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  // @ts-ignore
  const match = useRoutes(routes);
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
              <Layout>
                {match}
              </Layout>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
