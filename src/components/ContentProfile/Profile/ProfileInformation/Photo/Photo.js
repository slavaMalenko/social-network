import React from 'react';
import Preloader from '../../../../common/Preloader/Preloader';
import profilePhotoCss from './Photo.module.css';
// import profile from './img/profile__img.jpg';


function Photo(props) {

    return (
        <div className={profilePhotoCss.Photo}>
            {
                !props.profile
                    ? <Preloader />
                    : <img src={props.profile.photos.large} alt="" />
            }
            <a className={profilePhotoCss.edit} href="#">Редактировать</a>
        </div>
    );
}

export default Photo;