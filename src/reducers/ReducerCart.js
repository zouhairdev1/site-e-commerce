import * as actionType from "../actions/ActionType";
let Data ={};

const init = {
  itemsCart: [],
  itemsLength: 0,
};

const ReducerCart = (state = init, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      function addToCart() {
        const item = Data?.find((item) => {
          return item.id === action.payload.id;
        });

        if (!state.itemsCart.includes(item)) {
          return {
            ...state,
            itemsCart: [...state.itemsCart, item],
            itemsLength: state.itemsCart.length + 1,
          };
        } else return state;
      }

      return addToCart();

    case actionType.REMOVE_FROM_CART:
      function removeItemCart() {
        const items = state.itemsCart?.filter((item) => {
          return item.id !== action.payload.id;
        });

        return {
          ...state,
          itemsCart: items,
          itemsLength: state.itemsCart.length - 1,
        };
      }

      return removeItemCart();

    default:
      return state;
  }
};
export default ReducerCart;