import { connect } from 'react-redux';
import ProductIndex from './product_index';
import {getProducts} from '../../actions/product_action'

const mSTP = (state, ownProps) => {
    
    return {
        products: Object.values(state.entities.products),
        search: state.search
    }
}

const mDTP = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mSTP, mDTP)(ProductIndex)