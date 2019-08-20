import { combineReducers } from 'redux';
import  userReducer  from './user/userReducer';
import cardReducer from './cart/cartReducer';

export default combineReducers({
    user: userReducer,
    cart: cardReducer
})