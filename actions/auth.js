import reduxCall from '../utils/reduxCall'
import actionTypes from '../configs/actionTypes'

const GET_USER_INFO_ACTION = () => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: '/user',
            method: 'GET',
            name: 'GET_USER_INFO',
        })
    }
}

const REGISTER_ACTION = (formValue) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: '/user',
            method: 'POST',
            name: 'REGISTER',
            body: formValue
        })
    }
}

const VERIFY_USER_ACTION = (user_id) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/user/${user_id}`,
            method: 'GET',
            name: 'VERIFY_USER',
        })
    }
}

const LOGOUT_ACTION = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export { GET_USER_INFO_ACTION, REGISTER_ACTION, VERIFY_USER_ACTION, LOGOUT_ACTION }