import React, { useState, useEffect } from 'react';
import './Home.scss';
import WithLove from 'components/WithLove/WithLove';
import RoadMap from 'components/RoadMap/RoadMap';
import Mint from 'components/Mint/Mint';
import Team from 'components/Team/Team';
import Signature from 'components/Signature/Signature';
import {
    connectMetamaskWallet,
    disconnectWeb3Wallet,
    getIsConnected,
} from "../../utils/web3/connection";
import { Web3Listeners } from "../../types/web3";


const chainId = Number(process.env.REACT_APP_CHAIN_ID as string);

export const Home = () => {
    const [isConnected, setIsConnected] = useState(false);

    // listeners
    const disconnectAccountListener = (): void => {
        disconnectWeb3Wallet();
        setIsConnected(false);
    };
    const changeChainListener = (payload: string): void => {
        console.log('chain changed');
        const newChain = parseInt(payload, 16);
        if (newChain !== chainId) {
            disconnectWeb3Wallet();
            setIsConnected(false);
        }
    };
    const changeAccountListener = (): void => {
        disconnectWeb3Wallet();
        setIsConnected(false);
    };
    const listeners:Web3Listeners = [
        { title: 'accountsChanged', function: changeAccountListener },
        { title: 'chainChanged', function: changeChainListener },
        { title: 'disconnect', function: disconnectAccountListener }
    ];
    // wallet connect function
    const handleConnect = async ():Promise<void> => {
        try {
            if (!getIsConnected()) {
                await connectMetamaskWallet(listeners);
                setIsConnected(getIsConnected());
            }
        } catch (e) {
            console.log('error', e);
            disconnectWeb3Wallet();
            setIsConnected(false);
        }
    };
    // initial connect via useEffect
    useEffect(() => {
        handleConnect();
    }, []);
    return (
        <div className="home">
            <Mint isConnected={isConnected} handleConnect={handleConnect}/>
            <RoadMap  />
            <Team  />
            <WithLove />
            <Signature /> {/* position absolute */}
        </div>
    );
};

export default Home;
