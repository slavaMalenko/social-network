import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPost from './Profile/Post/MyPost/MyPost';
import NewPostContainer from './Profile/Post/NewPost/NewPostContainer';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';
import StoreContext from './../../StoreContext'

function ContentProfile(props) {
    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation />

            <NewPostContainer />

            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();
                    const postsElements = state.profilePage.postData
                        .map(post => <MyPost
                            message={post.message}
                            id={post.id} />).reverse()
                    return postsElements
                }}
            </StoreContext.Consumer>
        </div>
    );

}

export default ContentProfile;