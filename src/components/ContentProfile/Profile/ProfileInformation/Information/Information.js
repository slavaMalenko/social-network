import React from 'react';
import Preloader from '../../../../common/Preloader/Preloader';
import profileInformation from './Information.module.css'

function Information(props) {
    return (
        <div className={profileInformation.information}>
            <h1 className={profileInformation['information-name']}>Slava Malenko</h1>
            <p className={profileInformation['information-status']}>
                {
                    !props.profile
                        ? <Preloader />
                        : props.profile.lookingForAJobDescription
                }
            </p>

            <div className={profileInformation.hr}></div>

            <div className={profileInformation.item}>
                <p>Дата рождения:</p>
                <a className={profileInformation['item-a']} href="#">26 февраля 2000</a>
            </div>

            <div className={profileInformation.item}>
                <p>Город:</p>
                <a className={profileInformation['item-a']} href="#">Симферополь</a>
            </div>

            <div className={profileInformation.item}>
                <p>Языки:</p>
                <a className={profileInformation['item-a']} href="#">Русский, Английский</a>
            </div>

            <div className={profileInformation.item}>
                <p>Моб. телефон:</p>
                <a className={`${profileInformation['item-a']} ${profileInformation['item--bottom']}`} href="#">на прослушке</a>
            </div>

            <div className={profileInformation.item}>
                <p>Место учёбы:</p>
                <a className={profileInformation['item-a']} href="#">КФУ им. В. И. Вернадского</a>
            </div>

            <div className={profileInformation.item}>
                <p>Факультет:</p>
                <a className={profileInformation['item-a']} href="#">Институт экономики и управления</a>
            </div>

            <div className={profileInformation.item}>
                <p>Специальность:</p>
                <a className={profileInformation['item-a']} href="#">Бизнес-информатица и математическое моделирование</a>
            </div>
        </div>
    );
}


export default Information;