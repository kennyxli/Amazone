import { connect } from 'react-redux';
import {getCartItems} from '../../actions/cart_action'
import { receiveSearch, getProducts } from '../../actions/product_action';
import LowerNavbar from './lower_navbar';

const mSTP = (state) => ({
    products: Object.values(state.entities.products),
    // cartitems: Object.values(state.entities.cartitems),
    currentUser: state.session,
});

const mDTP = dispatch => ({
    receiveSearch: (title) => dispatch(receiveSearch(title)),
    getProducts: () => dispatch(getProducts()),
    getCartItems: () => dispatch(getCartItems())
});

export default connect(mSTP, mDTP)(LowerNavbar);

