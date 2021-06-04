import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPosts from './Profile/Post/MyPosts/MyPosts';
import NewPostContainer from './Profile/Post/NewPost/NewPostContainer';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';

function ContentProfile(props) {
    debugger
    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation profile={props.profile} />

            <NewPostContainer />

            <MyPosts postData={props.postData} />
        </div>
    );

}

export default ContentProfile;