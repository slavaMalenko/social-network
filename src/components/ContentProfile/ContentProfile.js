import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPostsContainer from './Profile/Post/MyPosts/MyPostsContainer';
import NewPostContainer from './Profile/Post/NewPost/NewPostContainer';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';

function ContentProfile(props) {
    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation profile={props.profile} />

            <NewPostContainer />

            <MyPostsContainer />
        </div>
    );

}

export default ContentProfile;