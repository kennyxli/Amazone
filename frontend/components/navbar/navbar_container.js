import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import Navbar from './navbar';

const mSTP = ({ session, entities: { users } }) => {
    debugger
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);