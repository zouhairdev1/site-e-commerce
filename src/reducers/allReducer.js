import { combineReducers } from 'redux';
import ReducerCart from "./ReducerCart";
import ReducerSearch from "./ReducerSearch";
import ReducerData from './ReducerData';
import ReducerSavedProducts from './ReducerSavedProducts';
import ReducerAuth from './ReducerAuth';

const rootReducer = combineReducers({
    cart: ReducerCart,
    search: ReducerSearch,
    data:ReducerData,
    saved:ReducerSavedProducts,
    auth:ReducerAuth,

  });
 
export default rootReducer;