import React from 'react';
import profilePhoto from './Photo.module.css';
import profile from './img/profile__img.jpg'


function Photo() {
    return (
        <div className={profilePhoto.Photo}>
            <img src={profile} alt="" />
            <a href="#">Редактировать</a>
        </div>
    );
}

export default Photo;