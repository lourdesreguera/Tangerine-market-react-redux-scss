import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/auth.reducer';
import storesReducer from './stores/stores.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  stores: storesReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
