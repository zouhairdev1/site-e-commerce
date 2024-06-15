import * as actionType from './ActionType';
import axios from "axios";
// authActions

export const register = (credentials) => async (dispatch) => {
  dispatch({ type: actionType.LOGIN_REQUEST });

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/register", credentials);

    dispatch({ type: actionType.LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch({ type: actionType.LOGIN_FAILURE, payload: errorMessage });
  }
};
export const login = (credentials) => async (dispatch) => {
  dispatch({ type: actionType.LOGIN_REQUEST });

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", credentials);
    if (response.status === 200) {
     
      dispatch({ type: actionType.LOGIN_SUCCESS, payload: response.data });
    }

   
  } catch (error) {
    
    const errorMessage = error.response.data.message+'invalid'+credentials.password+'uuu'
        
    dispatch({ type: actionType.LOGIN_FAILURE, payload: errorMessage });
  }
};
// action of fetch data
export const getData = (data)=> ({
  type:actionType.DATA, payload:data
})
// actions of search product or filter by category
export const search = (getSearch) => ({
  type: actionType.SEARCH,payload:{searchPro:getSearch}
});
export const selectCategory = (categorySelected) => ({
  type: actionType.CATEGORY,payload:{category:categorySelected}
});
// actions of cart shopping
export const addToCart = ( name, price, id, qty=1, color='black', image,slug ) => ({
  type: actionType.ADD_TO_CART,payload:{ name:name, price:price, id:id, qty:qty, color:color, image:image,slug:slug }
});
export const removeFromCart = (idItem) => ({
  type: actionType.REMOVE_FROM_CART,payload:{id:idItem}
});
// action of saved products
export const savedProduct = ( id ) => ({
  type: actionType.SAVED_PRODUCT,payload:{ id:id }
});
export const unsavedProduct = ( id ) => ({
  type: actionType.UNSAVED_PRODUCT,payload:{ id:id }
});
