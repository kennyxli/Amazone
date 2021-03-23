import { connect } from 'react-redux';
import Review from './review';
import { requestReviews, createReview, updateReview, destroyReview } from '../../actions/review_action'

const mSTP = (state) => {
    return {
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = (dispatch) => {

    return {
        requestReviews: productId => dispatch(requestReviews(productId)),
        createReview: (productId, review) => dispatch(createReview(productId, review)),
        updateReview: (review) => dispatch(updateReview(review)),
        destroyReview: (id) => dispatch(destroyReview(id))
    }
}

export default connect(mSTP, mDTP)(Review)