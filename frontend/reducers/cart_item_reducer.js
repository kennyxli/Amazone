import {RECEIVE_CART_ITEM, REMOVE_CART_ITEM} from "../actions/cart_action"

const cartItemReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_CART_ITEM:
            return action.cartitem
        case REMOVE_CART_ITEM:
            let newState = Object.assign({}, state)
            delete newState[action.cartid]
            return newState
        default:
            return state
    }
}

export default cartItemReducer