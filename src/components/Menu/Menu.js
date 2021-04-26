import React from 'react';
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
        <div className={menu.menu}>
            <ul>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={profile} alt="" />Моя страница</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={news} alt="" />Новости</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={messages} alt="" />Мессенджер</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={friends} alt="" />Друзья</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={community} alt="" />Сообщества</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={photos} alt="" />Фотографии</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={music} alt="" />Музыка</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={videos} alt="" />Видео</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={games} alt="" />Игры</a></li>
                <div className={menu.hr}></div>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={bookmarks} alt="" />Закладки</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={files} alt="" />Файлы</a></li>
                <li className={menu.item}><a href="#"><img className={menu['menu-img']} src={advertising} alt="" />Реклама</a></li>
            </ul>
        </div>
    );
}


export default Menu;