import { RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS } from '../actions/product_action'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, action.product)
        default:
            return state;
    }
};