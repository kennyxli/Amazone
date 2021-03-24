import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, CLEAR_REVIEW} from "../actions/review_action"

const reviewReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, action.reviews)
        case RECEIVE_REVIEW:
            return Object.assign({}, action.review)
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state)
            delete newState[action.reviewId]
            return newState
        case CLEAR_REVIEW:
            return {}
        default:
            return state
    }
}

export default reviewReducer