import React, { useState, useEffect } from "react";
import './Mint.scss';

import { ReactComponent as Minter } from "assets/img/mint/minter.svg";
import { toast } from 'react-toastify';
import BaseButton from "components/ui/BaseButton/BaseButton";
import BaseBadge from "components/ui/BaseBadge/BaseBadge";
import { getMaxMintAmount, getMaxSupply, getTotalSupply, getUserBalance } from "../../utils/web3/view";
import { getWalletAddress } from "../../utils/web3/connection";
import mintToken from "../../utils/web3/mint";
import generateError from "../../utils/errors";



interface IMintProps {
    isConnected?: boolean;
    handleConnect: () => Promise<void>
}

const defaultProps: Partial<IMintProps> = {
    isConnected: false
};

export const Mint = ({ isConnected, handleConnect }: IMintProps) => {
    // state
    const [totalSupply, setTotalSupply] = useState(0);
    const [supplyLimit, setSupplyLimit] = useState(0);
    const [maxMintAmount, setMaxMintAmount] = useState(0);
    const [userBalance, setUserBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const isUserMintAvailable = userBalance < maxMintAmount;
    const isPlatformMintAvailable = totalSupply < supplyLimit;
    const isMintAvailable = isUserMintAvailable && isPlatformMintAvailable;
    // methods
    const getButtonText = () => {
        if (isLoading) {
            return 'Loading';
        }
        if (isMintAvailable) {
            return "Mint";
        }
        if (isPlatformMintAvailable) {
            return "Mint limit";
        }
        return "Finished";
    };
    const fetchContractData = async () => {
        if (isConnected) {
            try {
                setIsLoading(true);
                setTotalSupply(Number(await getTotalSupply()));
                setMaxMintAmount(Number(await getMaxMintAmount()));
                setSupplyLimit(Number(await getMaxSupply()));
                setUserBalance(Number(await getUserBalance(await getWalletAddress())));
                setIsLoading(false);
            } catch {
                setIsLoading(true);
                setTotalSupply(0);
                setMaxMintAmount(0);
                setSupplyLimit(0);
                setUserBalance(0);
            }
        }
    };
    const handleMint = async () => {
        try {
            await mintToken();
            setTotalSupply(Number(await getTotalSupply()));
        } catch (e: any) {
            toast.error(generateError(e));
        }
    };

    // watcher
    useEffect(() => {
        fetchContractData();
    }, [isConnected]);

    // template
    return (
        <div className="mint">
            <div className="mint__anchor" id="mint"/>
            <div className="mint__hidden" />
            <h3 className="mint__title">Hi There</h3>
            <div className="mint__left">
                <Minter className="mint__img"/>
            </div>
            <p className="mint__text">
                He standard Lorem Ipsum passage, used since the 1500s
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC
                He standard Lorem Ipsum passage, used since the 1500s
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC
            </p>
            <div className="mint__hidden" />
            <div className="mint__panel">
                {!isLoading
                    && <BaseBadge
                        className="mint__counter"
                    >
                        {totalSupply} / {supplyLimit}
                    </BaseBadge>
                }
                <BaseButton
                    className="mint__button"
                    onClick={() => isConnected ? handleMint() : handleConnect()}
                    disabled={!isMintAvailable || isLoading}
                >
                    {isConnected ? getButtonText() : "Connect"}
                </BaseButton>
            </div>
        </div>
    );
};

Mint.defaultProps = defaultProps;

export default Mint;
