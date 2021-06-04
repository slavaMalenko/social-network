import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getProfileInformation, addPost, updateNewPostText } from './../../redux/profile-reducer';
import ContentProfile from './ContentProfile';

class ProfileAPIComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileInformation(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='./login' />

        return (
            <ContentProfile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        numberOfPosts: state.profilePage.numberOfPosts,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

let withUrlDataContainerComponent = withRouter(ProfileAPIComponent);

const ProfileContainer = connect(mapStateToProps, { getProfileInformation, addPost, updateNewPostText })(withUrlDataContainerComponent)

export default ProfileContainer;