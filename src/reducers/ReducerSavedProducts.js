import * as actionType from "../actions/ActionType";
const init = {
    productsSaved:[],
  };
const ReducerSavedProducts = (state = init, action) => {
    switch (action.type) {
      case actionType.SAVED_PRODUCT :
        
        return {...state,productsSaved:[...state.productsSaved,action.payload.id]}
      case actionType.UNSAVED_PRODUCT :
        const filterSaved =state.productsSaved.filter((id)=>id!==action.payload.id)
        return {...state,productsSaved:filterSaved }

      default:
        return state;
    }
  };
  export default ReducerSavedProducts;