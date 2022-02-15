import React from "react";
import './WithLove.scss';
import { ReactComponent as Heart } from 'assets/img/withLove/heart.svg';
import { ReactComponent as Guy } from 'assets/img/withLove/guy.svg';
import { ReactComponent as Skeleton } from 'assets/img/withLove/skeleton.svg';

export const WithLove = () => {
    return (
        <div className="withlove">
            <Guy />
            <Heart />
            <Skeleton />
        </div>
    );
};

export default WithLove;
