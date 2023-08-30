import fetchUrl from './fetchUrl'
import actionTypes from '../configs/actionTypes'

const reduxCall = async (dispatch,{ url, method, name, body }) => {
    dispatch({
        type: actionTypes[`${name}_STARTED`],
        loading: true,
        logged: true,
    })
    try{
        const response = await fetchUrl({ url, method, body })
        dispatch({
            type: actionTypes[`${name}_SUCCESS`],
            loading: false,
            logged: true,
            response,
        })
    }
    catch(e){
        console.log('error',e)
        dispatch({
            type: actionTypes[`${name}_FAILED`],
            loading: false,
            logged: false,
            error: true,
        })
    }
}

export default reduxCall
