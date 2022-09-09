import * as actions from './aut.actions';

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.LOGIN_USER_START: {
            return { ...state, isLoading: true, error: null };
        }
        case actions.LOGIN_USER_OK: {
            return { ...state, user: payload, isLoading: false, error: null }
        }   
        case actions.LOGIN_USER_ERROR: {
            return { ...state, user: false, isLoading: false, error: payload }
        }
        case actions.LOGOUT_START: {
            return { ...state, isLoading: true, error: null };
        }
        case actions.LOGOUT_OK: {
            return { ...state, user: false, isLoading: false, error: null };
        }
        case actions.LOGOUT_ERROR: {
            return { ...state, user: false, isLoading: false, error: payload }
        }
        default:
            return state;
    }
};

export default authReducer;