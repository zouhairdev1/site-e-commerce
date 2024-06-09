import { combineReducers } from 'redux';
import ReducerCart from "./ReducerCart";
import ReducerSearch from "./ReducerSearch";
import ReducerData from './ReducerData';
import ReducerSavedProducts from './ReducerSavedProducts';

const rootReducer = combineReducers({
    cart: ReducerCart,
    search: ReducerSearch,
    data:ReducerData,
    saved:ReducerSavedProducts,

  });
 
export default rootReducer;