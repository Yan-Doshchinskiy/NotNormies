import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Router from "routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Layout from "./layout/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Router/>
                <ToastContainer
                    limit={3}
                    pauseOnHover
                    autoClose={5000}
                    position="bottom-right"
                    hideProgressBar={false}
                    draggable
                    theme="colored"
                />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
