import MintABI from 'utils/abis/MINT_ABI.json';
import { getWeb3 } from 'utils/web3/connection';

const mintContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS as string;

export const getMaxMintAmount = async ():Promise<string> => {
  const web3Wallet = getWeb3();
  const contract = new web3Wallet.eth.Contract(MintABI, mintContractAddress);
  return contract.methods.maxMintAmount.apply(this, []).call();
};

export const getMaxSupply = async ():Promise<string> => {
  const web3Wallet = getWeb3();
  const contract = new web3Wallet.eth.Contract(MintABI, mintContractAddress);
  return contract.methods.maxSupply.apply(this, []).call();
};


export const getTotalSupply = async ():Promise<string> => {
  const web3Wallet = getWeb3();
  const contract = new web3Wallet.eth.Contract(MintABI, mintContractAddress);
  return contract.methods.totalSupply.apply(this, []).call();
};

export const getUserBalance = async (address: string):Promise<string> => {
  const web3Wallet = getWeb3();
  const contract = new web3Wallet.eth.Contract(MintABI, mintContractAddress);
  return contract.methods.balanceOf.apply(this, [address]).call();
};

export const getTokenCost = async ():Promise<string> => {
  const web3Wallet = getWeb3();
  const contract = new web3Wallet.eth.Contract(MintABI, mintContractAddress);
  return contract.methods.cost.apply(this, []).call();
};

