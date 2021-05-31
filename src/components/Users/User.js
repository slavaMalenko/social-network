import React from 'react';
import { NavLink } from 'react-router-dom';
import { followApi } from '../../api/api';
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
                                disabled={props.followingInProgress}
                                className={UserCss['button-on']}
                                onClick={() => {
                                    props.toggleFollowingInProgress(true);
                                    followApi.getUnfollow(props.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(props.id)
                                            }
                                            props.toggleFollowingInProgress(false);
                                        })
                                }} >
                                Удалить из друзей</button>

                            : <button
                                disabled={props.followingInProgress}
                                className={UserCss['button-off']}
                                onClick={() => {
                                    props.toggleFollowingInProgress(true);
                                    followApi.getFollow(props.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(props.id)
                                            }
                                            props.toggleFollowingInProgress(false);
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