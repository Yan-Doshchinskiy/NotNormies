import './App.scss';
import React from 'react';
import routes from 'routes/routes';
// @ts-ignore
import { useRoutes } from 'hookrouter';
import React, { useMemo } from 'react';
// import * as anchor from '@project-serum/anchor';
import Router from "routes/Router";
import { BrowserRouter } from "react-router-dom";
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
import Layout from "./layout/Layout";

const App = () => {
  return (
      <Layout>
          <Router />
      </Layout>
  );
};

export default App;
