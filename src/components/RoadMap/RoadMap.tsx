import React from "react";
import './RoadMap.scss';
import { ReactComponent as Collage } from "assets/img/roadmap/collage.svg";

export const RoadMap = () => {
    const roadmap = [
        {
            id: 0,
            percent: 10,
            text: 'Selling 10% NotNormiesNFT(3N) will solve the mystery of the rarity of pictures;'
        },
        {
            id: 1,
            percent: 25,
            text: 'Release of the first comic book with 3N\'s perasnages (As well as their further production along with your characters);'
        },
        {
            id: 2,
            percent: 40,
            text: 'Part of the proceeds goes to the NOT NORMIES advertising campaign;'
        },
        {
            id: 3,
            percent: 50,
            text: 'Creation of your own clothing brand  IRL;'
        },
        {
            id: 4,
            percent: 60,
            text: 'Beginning of cooperation with the metaverse, in which we will produce our own line of clothing and accessories in the future;'
        },
        {
            id: 5,
            percent: 75,
            text: 'Drawing for holders;'
        },
        {
            id: 6,
            percent: 90,
            text: 'Expansion of the team and further work with developers;'
        },
        {
            id: 7,
            percent: 100,
            text: 'Game creation. (Not on blockchain! But it will play a role of advertising in the future);'
        },

    ];
    return (
        <div className="roadmap">
            <div className="roadmap__anchor" id="roadmap"/>
            <Collage className="roadmap__image"/> {/* position absolute */}
            <div className="roadmap__hidden"/>
            <h3 className="roadmap__title">Roadmap</h3>
            <div className="roadmap__right">
                <div className="roadmap__list">
                    {roadmap.map(({ percent, text }) => (
                        <p className="roadmap__row">
                            <div className="roadmap__percent">{percent}% <span className="roadmap__dash">-</span> </div>
                            <span  className="roadmap__text">
                                {text}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
