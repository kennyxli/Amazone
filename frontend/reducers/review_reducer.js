import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from "../actions/review_action"

const reviewReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, state, action.reviews)
        case RECEIVE_REVIEW:
            return Object.assign({}, state,action.review)
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state)
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default reviewReducer