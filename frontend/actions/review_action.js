import * as APIReview from "../util/review_api_util"

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const CLEAR_REVIEW = 'CLEAR_REVIEW'

export const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})
export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})
export const removeReview = (reviewId) => {
    
    return {
    type: REMOVE_REVIEW,
    reviewId
}}
export const clearReview = () =>({
    type: CLEAR_REVIEW
})

export const requestReviews = (productId) => dispatch => (
    APIReview.getReviews(productId).then(reviews => dispatch(receiveAllReviews(reviews)))
)

export const createReview = (productId, review) => dispatch => (
    APIReview.createReview(productId, review).then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
    APIReview.updateReview(review).then(review => dispatch(receiveReview(review)))
)

export const destroyReview = (id) => dispatch => {
    
    return APIReview.destroyReview(id).then(id => dispatch(removeReview(id)))
}