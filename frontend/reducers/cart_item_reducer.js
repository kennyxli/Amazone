import {RECEIVE_CART_ITEM, REMOVE_CART_ITEM, RECEIVE_CART_ITEMS} from "../actions/cart_action"

const cartItemReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, action.payload)
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, action.cartitem)
        case REMOVE_CART_ITEM:
            let newState = Object.assign({}, state)
            delete newState[action.cartid]
            return newState
        default:
            return state
    }
}

export default cartItemReducer