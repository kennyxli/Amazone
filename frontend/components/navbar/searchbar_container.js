import {connect} from 'react-redux'
import SearchBar from './searchbar'
import {getProducts, receiveSearch} from '../../actions/product_action'

const mSTP = (state, ownProps) => ({
    // history: ownProps.history.push('/products'),
    products: Object.values(state.entities.products),
    search: state.search
})

const mDTP = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        receiveSearch: (search) => dispatch(receiveSearch(search))
    }
}

export default connect(mSTP, mDTP)(SearchBar)