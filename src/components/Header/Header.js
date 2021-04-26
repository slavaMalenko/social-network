import React from 'react';
import './Header.css';
import vk from './img/vk.jpg';
import arrow from './img/arrow.png'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__cont">
                    <a href="#"><img className="header__cont-img" src={vk} alt="" /></a>
                    <a href="#" className="header__cont__exit">
                        Выйти
                        <img src={arrow} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;