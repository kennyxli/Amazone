import {combineReducers} from 'redux'
import usersReducer from './user_reducer';
import productsReducer from './products_reducer'
import reviewReducer from './review_reducer';

export default combineReducers({
    users: usersReducer,
    products: productsReducer,
    reviews: reviewReducer,
})