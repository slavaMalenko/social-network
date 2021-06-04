import React from 'react';
import { NavLink } from 'react-router-dom';
import MyPostsCss from './MyPosts.module.css'
import profile from './../../ProfileInformation/Photo/img/profile__img.jpg'

function MyPosts(props) {
    const postsElements = props.postData
        .map(post => <Post
            message={post.message}
            id={post.id} />).reverse()

    return (
        <div className={MyPostsCss.container}>
            {postsElements}
        </div>
    )
}

function Post(props) {
    let path = '/profile/' + props.id;

    return (
        <NavLink to={path} className={MyPostsCss.post}>
            <a className={MyPostsCss.a} href="#">
                <img
                    className={MyPostsCss.post__img}
                    src={profile} />
            </a>

            <div className={MyPostsCss.content}>
                <a href="#">Slava Malenko</a>
                <p className={MyPostsCss.text}>{props.message}</p>
            </div>
        </NavLink>
    );
}

export default MyPosts;