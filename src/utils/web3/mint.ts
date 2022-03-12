import MintABI from 'utils/abis/MINT_ABI.json';
import BigNumber from "bignumber.js";
import { getTokenCost } from "./view";
import { getWalletAddress, getWeb3 } from "./connection";
// import { getFee } from "./utilityFunctions";

const mintContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS as string;

export const mintToken = async () => {
    const method = 'mint';
    const mintAmount = 1;
    const params = [mintAmount];
    const cost = await getTokenCost();
    const value = new BigNumber(cost).multipliedBy(mintAmount).toString();
    // const fee = await getFee(method, MintABI, mintContractAddress, params);
    const web3Wallet = getWeb3();
    const userAddress = await getWalletAddress();
    const inst = new web3Wallet.eth.Contract(MintABI, mintContractAddress);
    const data = inst.methods[method].apply(null, params).encodeABI();
    return web3Wallet.eth.sendTransaction({
        from: userAddress,
        to: mintContractAddress,
        data,
        value,
        // gasPrice: fee.gasPrice,
        // gas: fee.estimatedGas
    });
};

export default mintToken;
