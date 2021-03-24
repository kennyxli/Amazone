import { connect } from 'react-redux';

import { receiveSearch, getProducts } from '../../actions/product_action';
import LowerNavbar from './lower_navbar';

const mSTP = (state) => ({
    products: Object.values(state.entities.products),
});

const mDTP = dispatch => ({
    receiveSearch: (title) => dispatch(receiveSearch(title)),
    getProducts: () => dispatch(getProducts())
});

export default connect(mSTP, mDTP)(LowerNavbar);

