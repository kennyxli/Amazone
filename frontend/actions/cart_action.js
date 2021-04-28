import * as APICart from "../util/cart_api_util"


export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const DELETE_CART = 'DELETE_CART'
// export const CLEAR_CART_ITEM = 'CLEAR_CART_ITEM'

export const receiveCartItems = (payload) => ({
    type: RECEIVE_CART_ITEMS,
    payload
})

export const receiveCartItem = (cartitem) => ({
    type: RECEIVE_CART_ITEM,
    cartitem
})

export const removeCartItem = (cartid) => ({
    type: REMOVE_CART_ITEM,
    cartid
})

export const deleteCart = () => ({
    type: DELETE_CART
})

export const getCartItems = () => dispatch => (
    APICart.getCartItems().then(cartitems => dispatch(receiveCartItems(cartitems)))
)

export const createCartItem = (productId) => dispatch => (
    APICart.createCartItem(productId).then(cartitem => dispatch(receiveCartItem(cartitem)))
)

export const updateCartItem = (cartItem, productId) => dispatch => (
    APICart.updateCartItem(cartItem, productId).then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const removeCartItems = (productId) => dispatch (
    APICart.destroyCartItem(productId).then(cartItemId => dispatch(removeCartItem(cartItemId)))
)
