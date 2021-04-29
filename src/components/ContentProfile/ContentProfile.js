import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPost from './Profile/Post/MyPost/MyPost';
import NewPost from './Profile/Post/NewPost/NewPost';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';

function ContentProfile(props) {

    const postsElements = props.state.postData
        .map(post => <MyPost message={post.message} />)

    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation />


            <NewPost />

            {postsElements}
        </div>
    );

}

export default ContentProfile;