import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import Navbar from './navbar';

const mSTP = (state) => {
    
    let user = null;
    if (state.session.currentUser){
        user = state.entities.users[Object.keys(state.session.currentUser)]
    }
    return {

        currentUser: user
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);