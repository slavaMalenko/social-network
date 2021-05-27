import React from 'react';
import { NavLink } from 'react-router-dom';
import UserCss from './User.module.css';

function User(props) {
    return (
        <div className={UserCss.container}>
            <NavLink className={UserCss.link} to={'/profile/' + props.id} >
                <img className={UserCss['link-img']} src={props.photo} />
            </NavLink >

            <div className={UserCss.component}>
                <div className={UserCss.information}>
                    <NavLink className={UserCss['information-name']} to={'/profile/' + props.id} >
                        {props.name}
                    </NavLink >
                    <p className={UserCss['information-status']}>{props.status}</p>
                    <p className={UserCss['information-location']}>{'props.country'}, {'props.city'}</p>
                </div>

                <div className={UserCss.button}>
                    {
                        props.followed
                            ? <button className={UserCss['button-on']} onClick={() => { props.unfollow(props.id) }} >Удалить из друзей</button>
                            : <button className={UserCss['button-off']} onClick={() => { props.follow(props.id) }} >Добавить в друзья</button>
                    }
                </div>
            </div>
        </div>
    );
}


export default User;