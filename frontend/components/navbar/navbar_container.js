import { connect } from 'react-redux';
import { deleteCart } from '../../actions/cart_action';

import { logout } from '../../actions/session';
import session from '../../reducers/session';
import Navbar from './navbar';

const mSTP = (state) => {     
    return {
        currentUser: state.entities.users[state.session.currentUser],
        cartItems: Object.values(state.entities.cartItem),
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    deleteCart: () => dispatch(deleteCart())
});

export default connect(mSTP, mDTP)(Navbar);