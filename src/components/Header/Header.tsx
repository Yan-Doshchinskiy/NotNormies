import React from "react";
import './Header.scss';
import {ReactComponent as Logo} from 'assets/img/logo.svg';
import {ReactComponent as Github} from 'assets/img/icon/github.svg';
import {ReactComponent as Instagram} from 'assets/img/icon/instagram.svg';
import {ReactComponent as Twitter} from 'assets/img/icon/twitter.svg';
import {ReactComponent as Discord} from 'assets/img/icon/discord.svg';

export const Header = () => {
    const tabs = [
        {
            id: 0,
            title: "ROADMAP",
            key: "roadmap"
        },
        {
            id: 1,
            title: "TEAM",
            key: "team"
        }
    ];
    const buttons = [
        {
            id: 0,
            Component: Discord,
            link: "https://www.discord.com"
        },
        {
            id: 1,
            Component: Twitter,
            link: "https://www.twitter.com"
        },
        {
            id: 2,
            Component: Instagram,
            link: "https://www.instagram.com"
        },
        {
            id: 3,
            Component: Github,
            link: "https://www.github.com"
        }
    ];
    return (
        <div className="header">
             <Logo/>
             <div className="header__links">
                {tabs.map((tab) => (
                    <button type="button" className="header__tab" key={tab.id}>{tab.title}</button>
                ))}
             </div>
            <div className="header__panel">
                {buttons.map(({id, Component, link}) => (
                    <a
                        key={id}
                        className="header__social"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Component className="header__icon" height="50px" width="50px" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Header;
