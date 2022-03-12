import { disconnectWeb3Wallet } from "utils/web3/connection";

const chainId = Number(process.env.REACT_APP_CHAIN_ID as string);

export const disconnectAccountListener = async (): Promise<void> => {
    disconnectWeb3Wallet();
};

export const changeChainListener = async (payload: string): Promise<void> => {
    const newChain = parseInt(payload, 16);
    if (newChain !== chainId) {
        disconnectWeb3Wallet();
    }
};

export const changeAccountListener = async (): Promise<void> => {
    disconnectWeb3Wallet();
};
