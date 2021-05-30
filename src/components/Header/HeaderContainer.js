import React from 'react';
import { connect } from 'react-redux';
import { getMe } from '../../api/api';
import { setAuthUserData } from './../../redux/auth-reducer';
import Header from './Header';

class HeaderAPIComponent extends React.Component {

    componentDidMount() {
        getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
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


let HeaderContainer = connect(mapStateToProps, { setAuthUserData })(HeaderAPIComponent)

export default HeaderContainer;