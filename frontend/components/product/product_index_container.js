import { connect } from 'react-redux';
import ProductIndex from './product_index';
import {getProducts, receiveSearch} from '../../actions/product_action'
import { clearReview } from '../../actions/review_action'
const mSTP = (state, ownProps) => {
    
    return {
        products: Object.values(state.entities.products),
        search: state.search
    }
}

const mDTP = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        receiveSearch: (search) => dispatch(receiveSearch(search)),
        clearReview: () => dispatch(clearReview())
    }
}

export default connect(mSTP, mDTP)(ProductIndex)