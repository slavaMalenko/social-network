import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from './../../../../../redux/profile-reducer';
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

const NewPostContainer = connect(mapStateToProps, { addPost, updateNewPostText })(NewPost);

export default NewPostContainer;