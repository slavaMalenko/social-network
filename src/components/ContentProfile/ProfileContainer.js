import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
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