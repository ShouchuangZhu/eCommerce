import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  userReducer  from './user/userReducer';
import cardReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cardReducer,
    directory: directoryReducer,
    shop: shopReducer
})
export default persistReducer(persistConfig, rootReducer);