import React from 'react';
import HomePage from 'pages/Home/Home';
import {Pages} from "types/main";
import {SingleRout} from "../types/main";

export const routesArray: Array<SingleRout> = [
    {
        title: 'Home',
        link: Pages.HOME,
        component: () => <HomePage />,
    },
];

interface IAccMenu {
    [n: string]: (props: Pick<SingleRout, 'component'>) => JSX.Element;
}

const routes = routesArray.reduce((acc: IAccMenu, rec: SingleRout):IAccMenu => {
    acc[rec.link] = rec.component;
    return acc;
}, {});

export default routes;
