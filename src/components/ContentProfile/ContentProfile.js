import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPostsContainer from './Profile/Post/MyPosts/MyPostsContainer';
import NewPostContainer from './Profile/Post/NewPost/NewPostContainer';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';
import StoreContext from './../../StoreContext';

function ContentProfile(props) {
    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation />

            <NewPostContainer />

            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();
                    return (
                        <MyPostsContainer
                            state={state.profilePage.postData}
                        />
                    )
                }}
            </StoreContext.Consumer>
        </div>
    );

}

export default ContentProfile;