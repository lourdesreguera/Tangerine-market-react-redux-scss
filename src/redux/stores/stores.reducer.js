import * as actions from './stores.actions';

const INITIAL_STATE = {
    stores: [],
    isLoading: false,
    error: null,
};

const storesReducer = (state= INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.GETTING_STORES: {
            return { ...state, isLoading: true, error: null}
        }
        case actions.GET_STORES: {
            return { ...state, stores: payload, isLoading: false, error: null }
        }
        case actions.ERROR_STORES: {
            return { ...state, stores: [], isLoading: false, error: payload }
        }
        default:
            return state;
    }
};

export default storesReducer;