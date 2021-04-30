import { $CombinedState } from "redux"

export const getCartItems = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/cart_items'
    })
}


export const createCartItem = (cartitem) => {
    return $.ajax({
        method: 'POST',
        url: `api/cart_items`,
        data: {cartitem}
    })
}

export const updateCartItem = (cartItem, productId) => {
    return $.ajax({
        method:'PATCH',
        url: `api/cart_items/${productId}`,
        data: { cartItem }
    })
}

export const destroyCartItem = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/cart_items/${id}`
    })
}
