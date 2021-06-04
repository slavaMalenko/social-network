import { connect } from 'react-redux';
import ContentMessenger from './ContentMessenger';

let mapStateToProps = (state) => {
    return {
        state: state.messengerPage,
        isAuth: state.auth.isAuth,
    }
}

const ContentMessengerContainer = connect(mapStateToProps)(ContentMessenger);

export default ContentMessengerContainer;