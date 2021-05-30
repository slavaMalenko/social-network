import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { profileApi } from '../../api/api';
import { setUserProfile } from './../../redux/profile-reducer';
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
        profileApi.getProfileInfo(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return (
            <ContentProfile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let withUrlDataContainerComponent = withRouter(ProfileAPIComponent);

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent)

export default ProfileContainer;