import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPost from './Profile/Post/MyPost/MyPost';
import NewPostContainer from './Profile/Post/NewPost/NewPostContainer';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';

function ContentProfile(props) {
    debugger
    const postsElements = props.state.profilePage.postData
        .map(post => <MyPost
            message={post.message}
            id={post.id} />).reverse()

    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation />


            <NewPostContainer store={props.store} />

            {postsElements}
        </div>
    );

}

export default ContentProfile;