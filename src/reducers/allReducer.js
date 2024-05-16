import { combineReducers } from 'redux';
import ReducerCart from "./ReducerCart";
import ReducerSearch from "./ReducerSearch";
import ReducerData from './ReducerData';

const rootReducer = combineReducers({
    cart: ReducerCart,
    search: ReducerSearch,
    data:ReducerData,

  });
 
export default rootReducer;