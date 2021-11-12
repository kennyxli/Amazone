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

export const updateCartItem = (cartitem, id) => {
    return $.ajax({ 
        method:'PATCH',
        url: `api/cart_items/${id}`,
        data: { cartitem }
    })       
}     

export const destroyCartItem = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/cart_items/${id}`
    })
}      

export const destroyCart = () => {
    return $.ajax({
        method: 'DELETE',
        url: `api/cart_items/destroy_items`
    })
}
