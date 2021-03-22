import { connect } from 'react-redux';
import ProductShow from './product_show';
import {getProduct} from '../../actions/product_action'

const mSTP = (state, ownProps) => {
    return{
        productId: parseInt(ownProps.match.params.productId),
        product: state.entities.products[ownProps.match.params.productId],
        currentUser: state.entities.users[state.session.currentUser]
    }
}


const mDTP = (dispatch) => {
    return{
        getProduct: id => dispatch(getProduct(id))
    }
}

export default connect(mSTP, mDTP)(ProductShow)