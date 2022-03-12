import Web3 from 'web3';
import { changeNetwork } from 'utils/web3/utilityFunctions';
import { Web3Listeners } from "../../types/web3";

let web3Wallet: any;
let web3Listeners: Web3Listeners | [] = [];

// @ts-ignore
const { ethereum } = window;

export const disconnectWeb3Wallet = async ():Promise<void> => {
  if (ethereum) {
    web3Listeners.forEach(it => {
      ethereum.removeListener(it.title, it.function);
    });
  }
  web3Wallet = undefined;
  web3Listeners = [];
};

export const connectMetamaskWallet = async (listeners:Web3Listeners): Promise<void> => {
  if (!ethereum) {
    throw new Error("An error occurred when connecting the wallet");
  }
  web3Wallet = new Web3(ethereum);
  const userAddress = await web3Wallet.eth.getCoinbase();
  if (!userAddress) {
    await ethereum.request({ method: 'eth_requestAccounts' });
  }
  await changeNetwork();
  web3Listeners = listeners;
  web3Listeners.forEach(it => {
    ethereum.on(it.title, it.function);
  });
};

// Async Getters
export const getWeb3 = (): any => web3Wallet;

export const getIsConnected = (): boolean => !!web3Wallet;

export const getChainId = async (): Promise<string> => web3Wallet.eth.net.getId();

export const getWalletAddress = async (): Promise<string> => {
  const userAddress = await web3Wallet.eth.getCoinbase();
  return userAddress.toLowerCase();
};
