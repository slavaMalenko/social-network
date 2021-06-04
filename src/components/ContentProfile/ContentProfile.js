import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPosts from './Profile/Post/MyPosts/MyPosts';
import NewPost from './Profile/Post/NewPost/NewPost';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';

function ContentProfile(props) {
    debugger
    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation profile={props.profile} />

            <NewPost
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
            />

            <MyPosts postData={props.postData} />
        </div>
    );

}

export default ContentProfile;