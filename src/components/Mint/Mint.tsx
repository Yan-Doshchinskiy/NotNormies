import React, { useState, useEffect } from "react";
import './Mint.scss';
import { ReactComponent as Minter } from "assets/img/mint/minter.svg";
import BaseButton from "components/ui/BaseButton/BaseButton";
import BaseBadge from "components/ui/BaseBadge/BaseBadge";

export const Mint = () => {
    // state
    const [currentCount, setCurrentCount] = useState(0);
    const [maxCount, setMaxCount] = useState(0);

    // methods
    const handleMint = () => {
        console.log('MINT');
    };

    // watcher
    useEffect(() => {
        setCurrentCount(433);
        setMaxCount(1000);
    }, []);
    return (
        <div className="mint" id="mint">
            <div />
            <h3 className="mint__title">Zdorova dolboebi</h3>
            <Minter className="mint__img" />
            <div className="mint__description">
                <p className="mint__text">
                    He standard Lorem Ipsum passage, used since the 1500s
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC


                </p>
                <div className="mint__panel">
                    <BaseBadge className="mint__counter">{currentCount} / {maxCount}</BaseBadge>
                    <BaseButton className="mint__button" onClick={handleMint}>Mint</BaseButton>
                </div>
            </div>
        </div>
    );
};

export default Mint;
