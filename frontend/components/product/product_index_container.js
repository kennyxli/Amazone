import { connect } from 'react-redux';
import ProductIndex from './product_index';
import {getProducts} from '../../actions/product_action'

const mSTP = (state, ownProps) => {
    debugger
    return {
        products: Object.values(state.entities.products)
    }
}

const mDTP = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mSTP, mDTP)(ProductIndex)