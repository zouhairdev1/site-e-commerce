import * as actionType from './ActionType'
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
