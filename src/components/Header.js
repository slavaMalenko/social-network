import React from 'react';
import vk from './../img/vk.jpg';
import './../css/Header.css';


function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__cont">
                    <img className="header__cont-img" src={vk} alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;