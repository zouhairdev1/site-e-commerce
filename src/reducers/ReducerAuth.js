import * as actionType from "../actions/ActionType";
const isAuth=JSON.parse(localStorage.getItem('user'))?.isAuthenticated||false
const init = {
    user: null,
    isAuthenticated: isAuth,
    loading: false,
    error: null,
  };
const ReducerAuth = (state = init, action) => {
    switch (action.type) {
      case actionType.LOGIN_REQUEST :
        return {
            ...state,
            loading: true,
            error: null,
          };
        case actionType.LOGIN_SUCCESS:
          const user=action.payload;
          localStorage.setItem('user',JSON.stringify({...user,isAuthenticated:true}) )
         
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user:user ,
              };
           
        case actionType.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
              };
        case actionType.LOGOUT:
          localStorage.removeItem('user')
        return {
            ...state,
            isAuthenticated: false,
            user: null,
          };
      default:
        return state;
    }
  };
  export default ReducerAuth ;