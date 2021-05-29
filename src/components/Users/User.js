import React from 'react';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
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
                            ? <button
                                className={UserCss['button-on']}
                                onClick={() => {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'eb48bb2e-6a65-44b0-b33e-bc9cd2c3f9d8'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(props.id)
                                            }
                                        })
                                }} >
                                Удалить из друзей</button>

                            : <button
                                className={UserCss['button-off']}
                                onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'eb48bb2e-6a65-44b0-b33e-bc9cd2c3f9d8'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(props.id)
                                            }
                                        })
                                }} >
                                Добавить в друзья</button>
                    }
                </div>
            </div>
        </div>
    );
}


export default User;