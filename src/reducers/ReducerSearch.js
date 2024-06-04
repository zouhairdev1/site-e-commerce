import * as actionType from "../actions/ActionType";
const init = {
    search:'',
    categorySelected:''
  };
const ReducerSearch = (state = init, action) => {
    switch (action.type) {
      case actionType.SEARCH :
        return {...state,search:action.payload.searchPro}
      case actionType.CATEGORY :
        return {...state,categorySelected:action.payload.category}
      default:
        return state;
    }
  };
  export default ReducerSearch;