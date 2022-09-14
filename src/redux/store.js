import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import storeReducer from "./store/store.reducer";
import productsReducer from "./products/products.reducer";
import storesReducer from "./stores/stores.reducer";
import shoppingCartReducer from "./shopping-cart/shopping-cart.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  stores: storesReducer,
  store: storeReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
