import React from 'react';
import './Home.scss';
import WithLove from 'components/WithLove/WithLove';
import Mint from 'components/Mint/Mint';
import Signature from 'components/Signature/Signature';


export const Home = () => {
    return (
        <div className="home">
            <Mint />
            <WithLove />
            <Signature />
        </div>
    );
};

export default Home;
