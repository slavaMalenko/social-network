import React from 'react';
import HeaderCss from './Header.module.css';
import vk from './img/vk.jpg';
import arrow from './img/arrow.png'
import { NavLink } from 'react-router-dom';

function Header(props) {

    return (
        <header>
            <div>
                <div className={HeaderCss.content}>
                    <a href="#"><img className={HeaderCss.img} src={vk} alt="" /></a>
                    <div className={HeaderCss.state}>
                        {
                            props.isAuth
                                ? <div className={HeaderCss.login}>{props.login}</div>
                                : <NavLink to={'/login'} className={HeaderCss.exit}>Войти <img src={arrow} /></NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;