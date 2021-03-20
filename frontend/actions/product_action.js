import * as APIProduct from "../util/product_api_util"

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

export const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const getProducts = () => dispatch => {
    debugger
    APIProduct.getProducts().then(products => dispatch(receiveAllProducts(products)))
}
export const getProduct = (id) => dispatch => (
    APIProduct.getProduct(id).then(product => dispatch(receiveProduct(product)))
)