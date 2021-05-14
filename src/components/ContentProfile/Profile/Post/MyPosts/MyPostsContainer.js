import React from 'react';
import { connect } from 'react-redux';
import MyPostsContainerCss from './MyPostsContainer.module.css'
import Posts from './Posts/Posts';

let mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    }
}

const MyPostsContainer = connect(mapStateToProps)(Posts);

export default MyPostsContainer;