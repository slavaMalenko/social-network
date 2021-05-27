import React from 'react';
import { NavLink } from "react-router-dom"
import menu from './Menu.module.css';
import profile from './img/profile.png';
import news from './img/news.png';
import messages from './img/messages.png';
import friends from './img/friends.png';
import community from './img/community.png';
import photos from './img/photos.png';
import music from './img/music.png';
import videos from './img/videos.png';
import games from './img/games.png';
import bookmarks from './img/bookmarks.png';
import files from './img/files.png';
import advertising from './img/advertising.png';

function Menu() {
    return (
        <div className={menu.container}>
            <ul>
                <li className={menu.item}>
                    <NavLink to="/profile" className={menu.NavLink}>
                        <img className={menu['item-img']} src={profile} alt="" />
                        Моя страница
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={news} alt="" />
                        Новости
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="/messenger" className={menu.NavLink}>
                        <img className={menu['item-img']} src={messages} alt="" />
                        Мессенджер
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="/users" className={menu.NavLink}>
                        <img className={menu['item-img']} src={friends} alt="" />
                        Друзья
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={community} alt="" />
                        Сообщества
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={photos} alt="" />
                        Фотографии
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={music} alt="" />
                        Музыка
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={videos} alt="" />
                        Видео
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={games} alt="" />
                        Игры
                    </NavLink>
                </li>

                <div className={menu.hr}></div>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={bookmarks} alt="" />
                        Закладки
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={files} alt="" />
                        Файлы
                    </NavLink>
                </li>

                <li className={menu.item}>
                    <NavLink to="#" className={menu.NavLink}>
                        <img className={menu['item-img']} src={advertising} alt="" />
                        Реклама
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}


export default Menu;