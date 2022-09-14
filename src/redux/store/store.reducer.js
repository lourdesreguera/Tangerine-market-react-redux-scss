import * as actions from "./store.actions";

const INITIAL_STATE = {
  store: null,
  isLoading: false,
  error: null,
};

const storeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GETTING_STORE: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.GET_STORE: {
      return { ...state, store: payload, isLoading: false, error: null };
    }
    case actions.ERROR_STORE: {
      return { ...state, store: null, isLoading: false, error: payload };
    }
    default:
      return state;
  }
};

export default storeReducer;
