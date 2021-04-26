import React from 'react';
import profileInformation from './Information.module.css'

function Information() {
    return (
        <div className={profileInformation.information}>
            <h1 className={profileInformation['information-name']}>Slava Malenko</h1>
            <p className={profileInformation['information-status']}>Английский я выучу только за то, что им разговаривал Леннон</p>

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