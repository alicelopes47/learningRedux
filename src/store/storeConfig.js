import { createStore, combineReducers} from 'redux'
import numerosReducer from './numeros/reducers'

const reducers = combineReducers({
    numeros: numerosReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig