import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import Cookies from 'universal-cookie'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
    name: 'stationary'
})

const createMyStore = () => {
    const cookies = new Cookies()
    let logged = false
    if( cookies.get('logged') === true ){
        logged = cookies.get('logged')
    }
    const store = createStore(
        rootReducer,
        {
            auth:{
                logged
            }
        },
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}

export default createMyStore