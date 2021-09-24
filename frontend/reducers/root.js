import {combineReducers} from 'redux';
import sessionReducer from './session'
import entitiesReducer from './entities_reducer'
import errorsReducer from './errors_reducer'
import searchReducer from './search_reducer';


const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    search: searchReducer,
})               

export default RootReducer 