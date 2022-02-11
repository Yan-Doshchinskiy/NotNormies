import React from 'react';
import './Layout.module.scss.css'

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout;
