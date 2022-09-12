import * as actions from "./aut.actions";

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
  commerces: []
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOGIN_USER_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.LOGIN_USER_OK: {
      return { ...state, user: payload, isLoading: false, error: null };
    }
    case actions.LOGIN_USER_ERROR: {
      return { ...state, user: false, isLoading: false, error: payload };
    }

    case actions.LOGOUT_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.LOGOUT_OK: {
      return { ...state, user: false, isLoading: false, error: null };
    }
    case actions.LOGOUT_ERROR: {
      return { ...state, user: false, isLoading: false, error: payload };
    }

    case actions.CHECK_SESSION_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.CHECK_SESSION_OK: {
      return { ...state, user: payload, isLoading: false, error: null };
    }
    case actions.CHECK_SESSION_ERROR: {
      return { ...state, isLoading: false, user: false };
    }

    case actions.REGISTER_USER_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.REGISTER_USER_OK: {
      return { ...state, user: payload, isLoading: false, error: null };
    }
    case actions.REGISTER_USER_ERROR: {
      return { ...state, error: payload, isLoading: false, user: false };
    }

    case actions.REGISTER_COMMERCE_START: {
      return { ...state, isLoading: true, error: null };
    }
    case actions.CREATE_COMMERCE_OK: {
      return { ...state, commerces: [...state.commerces, payload] };
    }
    case actions.UPDATE_USER_COMMERCE: {
      // console.log(state.user);
      // const userStore = state.user.store;
      return { ...state, user: { ...state.user, store: payload } };
    }
    default:
      return state;
  }
};

export default authReducer;
