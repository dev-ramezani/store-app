import reduxCall from '../utils/reduxCall'

const ADD_TO_CART_ACTION = (user_id,product_info) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/users/${user_id}/cart`,
            method: 'POST',
            name: 'ADD_TO_CART',
            body: product_info
        })
    }
}

const GET_CART_PRODUCTS_INFO_ACTION = (user_id) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/users/${user_id}/cart`,
            method: 'GET',
            name: 'GET_CART_PRODUCTS_INFO',
        })
    }
}

const GET_CART_PRODUCT_SINGLE_INFO_ACTION = (user_id,product_id) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/users/${user_id}/cart?product_id=${product_id}`,
            method: 'GET',
            name: 'GET_CART_PRODUCT_SINGLE_INFO',
        })
    }
}

const UPDATE_CART_ACTION = (user_id,product_id,product_change) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/users/${user_id}/cart/${product_id}`,
            method: 'PUT',
            name: 'UPDATE_CART',
            body: product_change
        })
    }
}

const REMOVE_FROM_CART_ACTION = (user_id,product_id) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/users/${user_id}/cart/${product_id}`,
            method: 'DELETE',
            name: 'REMOVE_FROM_CART'
        })
    }
}

export { 
    ADD_TO_CART_ACTION, 
    GET_CART_PRODUCTS_INFO_ACTION, 
    GET_CART_PRODUCT_SINGLE_INFO_ACTION, 
    UPDATE_CART_ACTION, 
    REMOVE_FROM_CART_ACTION
}
