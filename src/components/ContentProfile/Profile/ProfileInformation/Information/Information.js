import React from 'react';
import Preloader from '../../../../common/Preloader/Preloader';
import profileInformation from './Information.module.css'

function Information(props) {
    return (
        <div className={profileInformation.container}>
            <h1 className={profileInformation.name}>Slava Malenko</h1>
            <p className={profileInformation.status}>
                {
                    !props.profile
                        ? <Preloader />
                        : props.profile.lookingForAJobDescription
                }
            </p>

            <div className={profileInformation.hr}></div>

            <div className={profileInformation.item}>
                <p className={profileInformation['item-data']}>Дата рождения:</p>
                <a className={profileInformation['item-a']} href="#">26 февраля 2000</a>
            </div>

            <div className={profileInformation.item}>
                <p className={profileInformation['item-data']}>Город:</p>
                <a className={profileInformation['item-a']} href="#">Симферополь</a>
            </div>

            <div className={profileInformation.item}>
                <p className={profileInformation['item-data']}>Языки:</p>
                <a className={profileInformation['item-a']} href="#">Русский, Английский</a>
            </div>

            <div className={profileInformation.item}>
                <p className={profileInformation['item-data']}>Моб. телефон:</p>
                <a className={`${profileInformation['item-a']} ${profileInformation['item-a--bottom']}`} href="#">на прослушке</a>
            </div>

            <div className={profileInformation.item}>
                <p className={profileInformation['item-data']}>Место учёбы:</p>
                <a className={profileInformation['item-a']} href="#">КФУ им. В. И. Вернадского</a>
            </div>

            <div className={profileInformation.item}>
                <p className={profileInformation['item-data']}>Факультет:</p>
                <a className={profileInformation['item-a']} href="#">Институт экономики и управления</a>
            </div>

            <div className={profileInformation.item}>
                <p className={profileInformation['item-data']}>Специальность:</p>
                <a className={profileInformation['item-a']} href="#">Бизнес-информатица и математическое моделирование</a>
            </div>
        </div>
    );
}


export default Information;