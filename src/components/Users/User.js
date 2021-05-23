import React from 'react';
import UsersCss from './Users.module.css';

function User(props) {
    return (
        <div className={UsersCss.user}>
            <div className={UsersCss.user_img}>
                <img src={props.photo} className={UsersCss.img} />
            </div>

            <div className={UsersCss.content}>
                <div className={UsersCss.information}>
                    <p className={UsersCss.name}>{props.name}</p>
                    <p className={UsersCss.status}>{props.status}</p>
                    <p className={UsersCss.location}>{'props.country'}, {'props.city'}</p>
                </div>

                <div className={UsersCss.button_cont}>
                    {
                        props.followed
                            ? <button onClick={() => { props.unfollow(props.id) }} className={UsersCss.button_on}>Удалить из друзей</button>
                            : <button onClick={() => { props.follow(props.id) }} className={UsersCss.button_off}>Добавить в друзья</button>
                    }
                </div>
            </div>
        </div>
    );
}


export default User;