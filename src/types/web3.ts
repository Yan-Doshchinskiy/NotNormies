import BigNumber from "bignumber.js";

interface SingleListener<T, P> {
    title: T,
    function: (payload: P) => void
}

export type Web3Listeners =  [
    SingleListener<'accountsChanged', any>,
    SingleListener<'chainChanged', string>,
    SingleListener<'disconnect', any>,
]

export interface TransactionReceipt {
    to: string;
    from: string;
    contractAddress: string,
    transactionIndex: number,
    root?: string,
    gasUsed: BigNumber,
    logsBloom: string,
    blockHash: string,
    transactionHash: string,
    logs: Array<any>,
    blockNumber: number,
    confirmations: number,
    cumulativeGasUsed: BigNumber,
    effectiveGasPrice: BigNumber,
    byzantium: boolean,
    type: number;
    status?: number
}

export type chainNameType =
    | 'eth'
    | 'ropsten'
    | 'rinkeby'
    | 'goerli'
    | 'kovan'
    | 'polygon'
    | 'mumbai'
    | 'bsc'
    | 'bsc testnet'
    | 'avalanche'
    | 'avalanche testnet'
    | 'fantom'
