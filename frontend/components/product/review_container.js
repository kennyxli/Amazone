import { connect } from 'react-redux';
import Review from './review';
import { requestReviews, createReview, updateReview, destroyReview,  clearReview} from '../../actions/review_action'

const mSTP = (state, ownProps) => {
    debugger
    return {
        reviews: Object.values(state.entities.reviews).filter(review=>(
            review.product_id === ownProps.product.id
        )),
        currentUser: state.session.currentUser
        // user: state.entities.users[state.entities.reviews.user_id]
    }
}

const mDTP = (dispatch) => {

    return {
        requestReviews: (productId) => dispatch(requestReviews(productId)),
        createReview: (productId, review) => dispatch(createReview(productId, review)),
        updateReview: (review) => dispatch(updateReview(review)),
        destroyReview: (id) => dispatch(destroyReview(id)),
        clearReview: () => dispatch(clearReview())
    }
}

export default connect(mSTP, mDTP)(Review)