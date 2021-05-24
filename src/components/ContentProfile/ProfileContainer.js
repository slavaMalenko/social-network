import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import ContentProfile from './ContentProfile';

class ProfileAPIComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIComponent)

export default ProfileContainer;