import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import {
    getChainId, getWeb3, getWalletAddress
} from 'utils/web3/connection';
import { TransactionReceipt, chainNameType } from 'types/web3';

const chainName = process.env.REACT_APP_CHAIN_NAME as chainNameType;
const expectedChainId = process.env.REACT_APP_CHAIN_ID as string;
const rpcUrl = process.env.REACT_APP_RPC_URL as string;

export const sendTransaction = async (method: string, abi: Array<AbiItem> | any, address: string, params?: string[]): Promise<TransactionReceipt> => {
    const web3Wallet = getWeb3();
    const userAddress = await getWalletAddress();
    const inst = new web3Wallet.eth.Contract(abi, address);
    const data = inst.methods[method].apply(null, params).encodeABI();
    return web3Wallet.eth.sendTransaction({
        to: address,
        data,
        from: userAddress,
    });
};

export const getFee = async (method: string, abi: Array<any>, address: string, params?: Array<any>, value?: string): Promise<any> => {
    const currentWallet = getWeb3();
    const contract = new currentWallet.eth.Contract(abi, address);
    const userAddress = await getWalletAddress();
    const [
      gasPrice,
      estimateGas
    ] = await Promise.all([
      currentWallet.eth.getGasPrice(),
      contract.methods[method].apply(this, params).estimateGas({ from: userAddress, value })
    ]);
    return {
      gasPrice,
      estimateGas
    };
};

export const changeNetwork = async (): Promise<void> => {
    // @ts-ignore
    const { ethereum } = window;
    const chainId = await getChainId();
    await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: Web3.utils.toHex(expectedChainId),
            rpcUrls: [rpcUrl],
            chainName,
        }],
    });
    if (chainId !== expectedChainId) {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: Web3.utils.toHex(expectedChainId) }],
        });
    }
};
