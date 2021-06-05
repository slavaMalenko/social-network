import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileInformation, addPost, updateNewPostText } from './../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
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
        return (
            <ContentProfile {...this.props} profile={this.props.profile} />
        )
    }
}



let authRedirectComponent = withAuthRedirect(ProfileAPIComponent);


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        numberOfPosts: state.profilePage.numberOfPosts,
        profile: state.profilePage.profile,
    }
}

let withUrlDataContainerComponent = withRouter(authRedirectComponent);

const ProfileContainer = connect(mapStateToProps, { getProfileInformation, addPost, updateNewPostText })(withUrlDataContainerComponent)

export default ProfileContainer;