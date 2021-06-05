import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import ContentMessenger from './ContentMessenger';

let authRedirectComponent = withAuthRedirect(ContentMessenger);

let mapStateToProps = (state) => {
    return {
        state: state.messengerPage,
        isAuth: state.auth.isAuth,
    }
}

const ContentMessengerContainer = connect(mapStateToProps)(authRedirectComponent);

export default ContentMessengerContainer;