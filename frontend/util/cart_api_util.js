import { $CombinedState } from "redux"

export const createCartItem = (cartItem, productId ) => {
    return $.ajax({
        method: 'POST',
        url: `api/cart_items/${productId}`,
        data: {cartItem}
    })
}

export const updateCartItem = (cartItem, productId) => {
    return $.ajax({
        method:'PATCH',
        url: `api/cart_items/${productId}`,
        data: { cartItem }
    })
}

export const destroyCartItem = (productId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/cart_items/${productId}`
    })
}
