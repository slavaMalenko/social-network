import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/profile-reducer'
import NewPost from './NewPost';

function NewPostContainer(props) {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<NewPost
        updateNewPostText={onPostChange}
        addPost={addPost}
        newPostText={state.profilePage.newPostText} />)
}

export default NewPostContainer;