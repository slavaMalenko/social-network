import { connect } from 'react-redux';
import ContentMessenger from './ContentMessenger';

let mapStateToProps = (state) => {
    return {
        state: state.messengerPage,
    }
}

const ContentMessengerContainer = connect(mapStateToProps)(ContentMessenger);

export default ContentMessengerContainer;