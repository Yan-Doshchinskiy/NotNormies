import React from "react";
import './Header.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
// import { ReactComponent as Github } from 'assets/img/icon/github.svg';
import { ReactComponent as Instagram } from 'assets/img/icon/instagram.svg';
import { ReactComponent as Twitter } from 'assets/img/icon/twitter.svg';
import { ReactComponent as Discord } from 'assets/img/icon/discord.svg';
import Pages from "../../types/main";

type HeaderTab = {
    id: number,
    title: string,
    key: string,
}

type HeaderSocial = {
    id: number,
    Component: React.JSXElementConstructor<{ className: string, height: string, width: string }>,
    link: string,
}

export const Header = () => {
    const tabs: Array<HeaderTab> = [
        {
            id: 0,
            title: "MINT",
            key: "mint",
        },
        {
            id: 1,
            title: "ROADMAP",
            key: "roadmap",
        },
        {
            id: 2,
            title: "TEAM",
            key: "team",
        }
    ];
    const buttons: Array<HeaderSocial> = [
        {
            id: 0,
            Component: Discord,
            link: `https://discord.gg/${process.env.REACT_APP_DISCORD_ID}`
        },
        {
            id: 1,
            Component: Twitter,
            link: `https://www.twitter.com/${process.env.REACT_APP_TWITTER_ID}`
        },
        {
            id: 2,
            Component: Instagram,
            link: `https://www.instagram.com/${process.env.REACT_APP_INSTAGRAM_ID}`
        },
        // {
        //     id: 3,
        //     Component: Github,
        //     link: "https://www.github.com"
        // }
    ];
    return (
        <div className="header">
            <Logo/>
            <div className="header__links">
                {tabs.map((tab) => (
                    <a
                        className="header__tab"
                        key={tab.id}
                        href={`${Pages.HOME}#${tab.key}`}
                    >
                        {tab.title}
                    </a>
                ))}
            </div>
            <div className="header__panel">
                {buttons.map(({ id, Component, link }) => (
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
