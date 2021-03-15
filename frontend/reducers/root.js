import {combineReducers} from 'redux';
import sessionReducer from './session'
import entitiesReducer from './entities_reducer'

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    
})

export default RootReducer