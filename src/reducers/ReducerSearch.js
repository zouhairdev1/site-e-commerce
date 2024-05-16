import * as actionType from "../actions/ActionType";
const init = {
    search:''
  };
const ReducerSearch = (state = init, action) => {
    switch (action.type) {
      case actionType.SEARCH :
        return {...state,search:action.payload.searchPro}
      default:
        return state;
    }
  };
  export default ReducerSearch;