import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/profile-reducer'
import NewPost from './NewPost';
import StoreContext from './../../../../../StoreContext';

function NewPostContainer(props) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <NewPost
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        newPostText={state.profilePage.newPostText}
                    />)
            }}
        </StoreContext.Consumer>
    )
}

export default NewPostContainer;