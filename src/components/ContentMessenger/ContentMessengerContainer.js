import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import ContentMessenger from './ContentMessenger';

let mapStateToProps = (state) => {
    return {
        state: state.messengerPage,
        isAuth: state.auth.isAuth,
    }
}

const ContentMessengerContainer = compose(
    connect(mapStateToProps),
    withAuthRedirect
)(ContentMessenger);

export default ContentMessengerContainer;