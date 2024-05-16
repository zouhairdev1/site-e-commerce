import { type } from '@testing-library/user-event/dist/type';
import * as actionType from './ActionType'

export const search = (getSearch) => ({
  type: actionType.SEARCH,payload:{searchPro:getSearch}
});
export const addToCart = (idItem) => ({
  type: actionType.ADD_TO_CART,payload:{id:idItem}
});
export const removeFromCart = (idItem) => ({
  type: actionType.REMOVE_FROM_CART,payload:{id:idItem}
});
export const getData = (data)=> ({
  type:actionType.DATA, payload:data
})