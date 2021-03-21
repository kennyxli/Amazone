export const getProducts = () => (
    $.ajax({
        method:'GET',
        url: 'api/products'
    })
)

export const getProduct = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
)