import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/">
                    <img src="logo.png" alt="Hactivespace" />
                </a>
            </div>
            <nav className="header__nav">
                <ul>
                    <li><a href="/Who_we_are">Who we are</a></li>
                    <li><a href="/research_areas">research areas</a></li>
                    <li><a href="/our_work">our work</a></li>
                    <li><a href="/programs">programs</a></li>
                    <li><a href="/carriers">carriers</a></li>
                    <li><a href="/blog">blog</a></li>
                    <li><a href="/people_section_links">people section links</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;