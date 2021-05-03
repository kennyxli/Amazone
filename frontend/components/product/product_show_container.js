import { connect } from 'react-redux';
import ProductShow from './product_show';
import {getProduct} from '../../actions/product_action'
import { requestReviews, clearReview } from '../../actions/review_action'
import { createCartItem, updateCartItem } from '../../actions/cart_action';

const mSTP = (state, ownProps) => {
    return{
        productId: parseInt(ownProps.match.params.productId),
        product: state.entities.products[ownProps.match.params.productId],
        currentUser: state.entities.users[state.session.currentUser],
        cartItems: Object.values(state.entities.cartItem)
    }
}


const mDTP = (dispatch) => {
    return{
        getProduct: id => dispatch(getProduct(id)),
        requestReviews: productId => dispatch(requestReviews(productId)),
        clearReview: () => dispatch(clearReview()),
        addCartItem: (productId) => dispatch(createCartItem(productId)),
        updateCartItem: (cartitem, id) => dispatch(updateCartItem(cartitem, id)),
        
    }
}

export default connect(mSTP, mDTP)(ProductShow)