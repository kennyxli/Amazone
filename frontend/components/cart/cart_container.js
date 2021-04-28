import { connect } from 'react-redux';
import {removeCartItem} from '../../actions/cart_action'
import Cart from './cart'

const mSTP = (state) => ({
    cartItems: Object.values(state.entities.cartItem),
    user: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.currentUser],
});

const mDTP = dispatch => ({
    deleteCartItem: (cartItemId) => dispatch(removeCartItem(cartItemId))
});

export default connect(mSTP, mDTP)(Cart);