import React from 'react';
import { NavLink } from 'react-router-dom';
import MyPostCss from './MyPost.module.css'
import profile from './../../ProfileInformation/Photo/img/profile__img.jpg'

function MyPost(props) {

    let path = '/profile/' + props.id;

    return (
        <NavLink to={path} className={MyPostCss.post}>
            <a className={MyPostCss.a} href="#">
                <img className={MyPostCss.post__img} src={profile} />
            </a>

            <div className={MyPostCss.content}>
                <a href="#">Slava Malenko</a>
                <p className={MyPostCss.text}>{props.message}</p>
            </div>
        </NavLink>
    );
}

export default MyPost;