// @ts-nocheck
import React from 'react';
import './Layout.scss';
import Header from 'components/Header/Header';




export const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
