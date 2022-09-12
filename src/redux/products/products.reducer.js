import * as actions from './products.actions';

const INITIAL_STATE = {
    products: [],
    isLoading: false,
    error: null,
    store: null
};

const productsReducer = (state= INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.GETTING_PRODUCTS: {
            return { ...state, isLoading: true, error: null}
        }
        case actions.GET_PRODUCTS: {
            return { ...state, products: payload, isLoading: false, error: null }
        }
        case actions.ERROR_PRODUCTS: {
            return { ...state, products: [], isLoading: false, error: payload }
        }
        
        case actions.REGISTER_PRODUCT_START: {
            return { ...state, isLoading: true, error: null};
        }
        case actions.CREATE_PRODUCT_OK: {
            return { ...state, products: [...state.products, payload] }
        }
        case actions.UPDATE_COMMERCE_PRODUCT: {
            return { ...state, products: [{...state.products, store: payload }] }
        }
        default:
            return state;
    }
};

export default productsReducer;