import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/profile-reducer'
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;