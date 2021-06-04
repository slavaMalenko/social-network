import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/auth-reducer';
import Header from './Header';

class HeaderAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUserProfile();
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


let HeaderContainer = connect(mapStateToProps, { getUserProfile })(HeaderAPIComponent)

export default HeaderContainer;