import * as APICart from "../util/cart_api_util"


export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
// export const CLEAR_CART_ITEM = 'CLEAR_CART_ITEM'

export const receiveCartItem = (cartitem) => ({
    type: RECEIVE_CART_ITEM,
    cartitem
})

export const removeCartItem = (cartid) => ({
    type: REMOVE_CART_ITEM,
    cartid
})

export const createCartItem = (cartItem, productId) => dispatch => (
    APICart.createCartItem(cartItem, productId).then(cartitem => dispatch(receiveCartItem(cartitem)))
)

export const updateCartItem = (cartItem, productId) => dispatch => (
    APICart.updateCartItem(cartItem, productId).then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const removeCartItem = (productId) => dispatch (
    APICart.destroyCartItem(productId).then(cartItemId => dispatch(removeCartItem(cartItemId)))
)
