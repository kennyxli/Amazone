import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_action'
const mSTP = (state, ownProps) => {
    return{
        productId: ownProps.match.params.productId,
        product: state.entities.products[ownProps.match.params.productId],
        userId: state.session.currentUser
    }
}

const mDTP = (dispatch) => {
    return {
        createReview: (productId, review) => dispatch(createReview(productId, review))
    }
}


export default connect(mSTP, mDTP)(ReviewForm)