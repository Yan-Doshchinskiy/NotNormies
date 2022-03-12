import './App.scss';
import React from 'react';
import Router from "routes/Router";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Router/>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
