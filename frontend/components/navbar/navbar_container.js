import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import session from '../../reducers/session';
import Navbar from './navbar';

const mSTP = (state) => {
    // let user = null;
    // if (state.session.currentUser){
        //     user = state.entities.users[Object.keys(state.session.currentUser)]
        // }
        
        
    return {
        currentUser: state.entities.users[state.session.currentUser],
        cartItems: Object.values(state.entities.cartItem)
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);