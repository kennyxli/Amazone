import { connect } from 'react-redux';
import {removeCartItem} from '../../actions/cart_action'
import Cart from './cart'

const mSTP = (state) => ({
    cartItems: Object.values(state.entities.cartItem),
});

const mDTP = dispatch => ({
    deleteCartItem: (cartItemId) => dispatch(removeCartItem(cartItemId))
});

export default connect(mSTP, mDTP)(Cart);