import React from 'react';
import Preloader from '../../../../common/Preloader/Preloader';
import profilePhotoCss from './Photo.module.css';
import photoProfile from './img/camera.png'
// import profile from './img/profile__img.jpg';


function Photo(props) {
    return (
        <div className={profilePhotoCss.container}>
            {
                !props.profile
                    ? <Preloader />
                    : !props.profile.photos.large
                        ? <img className={profilePhotoCss.photo} src={photoProfile} alt="" />
                        : <img className={profilePhotoCss.photo} src={props.profile.photos.large} alt="" />

            }
            <a className={profilePhotoCss.edit} href="#">Редактировать</a>
        </div>
    );
}

export default Photo;