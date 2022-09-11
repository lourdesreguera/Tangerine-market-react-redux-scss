import * as actions from "./shopping-cart.actions";

const INITIAL_STATE = {
  numberProducts: 0,
  shoppingCart: [],
};

const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_TO_SHOPPING_CART: {
      if (state.numberProducts === 0) {
        let cart = {
          id: payload._id,
          quantity: 1,
          name: payload.name,
          photo: payload.photo,
          price: payload.price,
        };
        state.shoppingCart.push(cart);
      } else {
        let check = false;
        state.shoppingCart.map((product, key) => {
          if (product.id === payload._id) {
            state.shoppingCart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: payload._id,
            quantity: 1,
            name: payload.name,
            photo: payload.photo,
            price: payload.price,
          };
          state.shoppingCart.push(_cart);
        }
      }
      return { ...state, numberProducts: state.numberProducts + 1 };
    }
    case actions.INCREASE_QUANTITY: {
      state.numberProducts++;
      state.shoppingCart[payload].quantity++;
      return { ...state };
    }
    case actions.DECREASE_QUANTITY: {
      if (state.shoppingCart[payload].quantity > 1) {
        state.numberProducts--;
        state.shoppingCart[payload].quantity--;
      }
      return { ...state };
    }
    case actions.DELETE_PRODUCT: {
        const quantity = state.shoppingCart[payload].quantity;
        return { ...state, numberProducts: state.numberProducts - quantity, shoppingCart: state.shoppingCart.filter(product => {
            return product.id !== state.shoppingCart[payload].id
        })}
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
