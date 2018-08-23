import { combineReducers } from 'redux'
import homeReducer from '../pages/home/root/store' 
import cartReducer from '../pages/cart/root/store' 
import itemReducer from '../pages/item/root/store' 
import mineReducer from '../pages/mine/root/store' 
import topicReducer from '../pages/topic/root/store' 

export default combineReducers({
    home: homeReducer,
    cart: cartReducer,
    item: itemReducer,
    mine: mineReducer,
    topic: topicReducer  
})