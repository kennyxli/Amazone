export const getReviews = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${productId}/reviews`
    })
}

export const createReview = (productId, review) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `api/products/${productId}/reviews`,
        data: {review}
    })
}

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: {review}
    })
}

export const destroyReview = (id) => {
    return $.ajax ({
        method: 'DELETE',
        url: `api/reviews/${id}`
    })
}