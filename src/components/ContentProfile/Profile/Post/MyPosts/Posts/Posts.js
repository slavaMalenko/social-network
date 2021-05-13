import React from 'react';
import { NavLink } from 'react-router-dom';
import PostsCss from './Posts.module.css'
import profile from './../../../ProfileInformation/Photo/img/profile__img.jpg'

function Posts(props) {
    const postsElements = props.state.profilePage.postData
        .map(post => <Post
            message={post.message}
            id={post.id} />).reverse()

    return (
        <div className={PostsCss.container}>
            {postsElements}
        </div>
    )
}

function Post(props) {
    let path = '/profile/' + props.id;

    return (
        <NavLink to={path} className={PostsCss.post}>
            <a className={PostsCss.a} href="#">
                <img
                    className={PostsCss.post__img}
                    src={profile} />
            </a>

            <div className={PostsCss.content}>
                <a href="#">Slava Malenko</a>
                <p className={PostsCss.text}>{props.message}</p>
            </div>
        </NavLink>
    );
}

export default Posts;