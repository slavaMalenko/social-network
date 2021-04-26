import React from 'react';
import HeaderCss from './Header.module.css';
import vk from './img/vk.jpg';
import arrow from './img/arrow.png'

function Header() {
    return (
        <header>
            <div className="container">
                <div className={HeaderCss.content}>
                    <a href="#"><img className={HeaderCss.img} src={vk} alt="" /></a>
                    <a href="#" className={HeaderCss.exit}>
                        Выйти
                        <img src={arrow} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;