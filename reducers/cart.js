import actionTypes from '../configs/actionTypes'

const cart = (state = [], action) => {
    switch(action.type) {        
        case actionTypes.ADD_TO_CART_STARTED:
            return { 
                ...state, 
                waiting: action.loading
            }
        case actionTypes.ADD_TO_CART_SUCCESS:
            return { 
                ...state, 
                waiting: action.loading
            }
        case actionTypes.ADD_TO_CART_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.GET_CART_PRODUCTS_INFO_STARTED:
            return { 
                ...state, 
                loading: action.loading,
            }
        case actionTypes.GET_CART_PRODUCTS_INFO_SUCCESS:
            return { 
                ...state, 
                loading: action.loading,
                userCart: action.response,
            }
        case actionTypes.GET_CART_PRODUCTS_INFO_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.UPDATE_CART_STARTED:
            return { 
                ...state, 
                lock: action.loading
            }
        case actionTypes.UPDATE_CART_SUCCESS:
            return { 
                ...state, 
                lock: action.loading
            }
        case actionTypes.UPDATE_CART_FAILED:
            return { 
                ...state, 
                ...action,
            } 
        case actionTypes.REMOVE_FROM_CART_STARTED:
            return { 
                ...state,
                waiting: action.loading
            }
        case actionTypes.REMOVE_FROM_CART_SUCCESS:
            return { 
                ...state,
                waiting: action.loading
            }
        case actionTypes.REMOVE_FROM_CART_FAILED:
            return { 
                ...state, 
                ...action,
            }
        default:
            return state
    }
}

export default cart