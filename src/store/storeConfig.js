import { createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state, action) {
        return {
            min: 9,
            max: 12
        }
    },
    nomes: function(state, action) {
        return [
            'Ana',
            'Bia', 
            'Alice', 
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig