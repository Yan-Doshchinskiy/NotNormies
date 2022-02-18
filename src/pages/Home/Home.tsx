// @ts-nocheck
import React from 'react';
import './Home.scss';
import WithLove from 'components/WithLove/WithLove';
import RoadMap from 'components/RoadMap/RoadMap';
import Mint from 'components/Mint/Mint';
import Team from 'components/Team/Team';
import Signature from 'components/Signature/Signature';


export const Home = () => {
    return (
        <div className="home">
            <Mint />
            <RoadMap  />
            <Team  />
            <WithLove />
            <Signature /> {/* position absolute */}
        </div>
    );
};

export default Home;
