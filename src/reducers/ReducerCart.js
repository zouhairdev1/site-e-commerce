import * as actionType from "../actions/ActionType";
let Data ={};

const init = {
  itemsCart: [
    { name: 'IPHONE 15 PRO MAX', price: 1040, id:123466768, color: 'Black', qty: 2, image: 'https://example.com/iphone.jpg' },
    { name: 'SAMSUNG GALAXY S23 ULTRA', price: 1040, id: 123466769, color: 'Black', qty: 1, image: 'https://example.com/samsung.jpg' },
    { name: 'MACBOOK AIR M2', price: 1040, id: 123466770, color: 'Black', qty: 1, image: 'https://example.com/macbook.jpg' },
  ],
  itemsLength:0,
};

const ReducerCart = (state = init, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      function addToCart() {
        const item = action.payload;

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