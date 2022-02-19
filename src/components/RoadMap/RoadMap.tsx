import React from "react";
import './RoadMap.scss';
import { ReactComponent as Collage } from "assets/img/roadmap/collage.svg";

export const RoadMap = () => {
    return (
        <div className="roadmap" id="roadmap">
            <Collage className="roadmap__image" /> {/* position absolute */}
            <div />
            <div className="roadmap__right">
                <div className="roadmap__list">
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                    <div className="roadmap__text">He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s He standard Lorem Ipsum passage, used since the 1500s</div>
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
