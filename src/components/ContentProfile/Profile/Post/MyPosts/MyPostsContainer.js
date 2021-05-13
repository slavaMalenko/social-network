import React from 'react';
import MyPostsContainerCss from './MyPostsContainer.module.css'
import Post from './Post/Post';

function MyPostsContainer(props) {
    debugger

    const postsElements = props.state
        .map(post => <Post
            message={post.message}
            id={post.id} />).reverse()

    return (
        <div className={MyPostsContainerCss.content}>
            {postsElements}
        </div>
    );

}

export default MyPostsContainer;