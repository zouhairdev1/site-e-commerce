import * as actionType from "../actions/ActionType";
const init = {
    productsSaved:[],
  };
const ReducerSavedProducts = (state = init, action) => {
    switch (action.type) {
      case actionType.SAVED_PRODUCT :
        return {...state,productsSaved:[...productsSaved,action.payload]}
      default:
        return state;
    }
  };
  export default ReducerSavedProducts;