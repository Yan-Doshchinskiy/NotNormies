import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'pages/Home/Home';
import { Pages } from "../types/main";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={Pages.HOME} component={HomePage} />
            <Redirect from="*" to={Pages.HOME} />
        </Switch>
    </BrowserRouter>
);

export default Router;