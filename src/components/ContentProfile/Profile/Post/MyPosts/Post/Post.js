import React from 'react';
import { NavLink } from 'react-router-dom';
import PostCss from './Post.module.css'
import profile from './../../../ProfileInformation/Photo/img/profile__img.jpg'

function Post(props) {

    let path = '/profile/' + props.id;

    return (
        <NavLink to={path} className={PostCss.post}>
            <a className={PostCss.a} href="#">
                <img
                    className={PostCss.post__img}
                    src={profile} />
            </a>

            <div className={PostCss.content}>
                <a href="#">Slava Malenko</a>
                <p className={PostCss.text}>{props.message}</p>
            </div>
        </NavLink>
    );
}

export default Post;