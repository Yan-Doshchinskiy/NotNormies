import React from 'react';
import './Home.module.scss';
import WithLove from 'components/WithLove/WithLove';


export const Home = () => {
    return (
        <div className="homePage">
            Home page
            <WithLove />
        </div>
    );
};

export default Home;
