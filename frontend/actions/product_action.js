import * as APIProduct from "../util/product_api_util"

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const RECEIVE_SEARCH= 'RECEIVE_SEARCH'

export const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const receiveSearch = (search) => ({
    type: RECEIVE_SEARCH,
    search
})

export const getProducts = () => dispatch => {
    
    return APIProduct.getProducts().then(products => dispatch(receiveAllProducts(products)),()=>{})
}
export const getProduct = (id) => dispatch => (
    APIProduct.getProduct(id).then(product => dispatch(receiveProduct(product)))
)