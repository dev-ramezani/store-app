import Cookies from 'universal-cookie'
import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
    const cookies = new Cookies()
    switch(action.type) {
        case actionTypes.GET_USER_INFO_STARTED:
            return { 
                ...state, 
                loading: action.loading,
            }
        case actionTypes.GET_USER_INFO_SUCCESS:
            return { 
                ...state, 
                loading: action.loading,
                users: action.response,
            }
        case actionTypes.GET_USER_INFO_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.REGISTER_STARTED:
            return { 
                ...state, 
                loading: action.loading
            }
        case actionTypes.REGISTER_SUCCESS:
            return { 
                ...state, 
                loading: action.loading
            }
        case actionTypes.REGISTER_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.VERIFY_USER_STARTED:
            return { 
                ...state, 
                logged: action.logged,
                loading: action.loading
            }
        case actionTypes.VERIFY_USER_SUCCESS:
            return { 
                ...state, 
                logged: action.logged,
                loading: action.loading,
                data: action.response
            }
        case actionTypes.VERIFY_USER_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.LOGOUT:
            cookies.remove('user_id')
            cookies.remove('logged')
            return {
                ...state,
                logged: false,
            }
        default:
            return state
    }
}

export default auth
