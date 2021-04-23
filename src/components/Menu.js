import React from 'react';
import './../css/Menu.css';
import profile from './../img/icons/profile.png';
import news from './../img/icons/news.png';
import messages from './../img/icons/messages.png';
import friends from './../img/icons/friends.png';
import community from './../img/icons/community.png';
import photos from './../img/icons/photos.png';
import music from './../img/icons/music.png';
import videos from './../img/icons/videos.png';
import games from './../img/icons/games.png';
import bookmarks from './../img/icons/bookmarks.png';
import files from './../img/icons/files.png';
import advertising from './../img/icons/advertising.png';

function Menu() {
    return (
        <div className="network__menu">
            <ul>
                <li><a href="#"><img src={profile} alt="" />Моя страница</a></li>
                <li><a href="#"><img src={news} alt="" />Новости</a></li>
                <li><a href="#"><img src={messages} alt="" />Мессенджер</a></li>
                <li><a href="#"><img src={friends} alt="" />Друзья</a></li>
                <li><a href="#"><img src={community} alt="" />Сообщества</a></li>
                <li><a href="#"><img src={photos} alt="" />Фотографии</a></li>
                <li><a href="#"><img src={music} alt="" />Музыка</a></li>
                <li><a href="#"><img src={videos} alt="" />Видео</a></li>
                <li><a href="#"><img src={games} alt="" />Игры</a></li>
                <li><a href="#"><img src={bookmarks} alt="" />Закладки</a></li>
                <li><a href="#"><img src={files} alt="" />Файлы</a></li>
                <li><a href="#"><img src={advertising} alt="" />Реклама</a></li>
            </ul>
        </div>
    );
}


export default Menu;