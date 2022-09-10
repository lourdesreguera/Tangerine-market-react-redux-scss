import axios from "axios";

export const GETTING_PRODUCTS = 'GETTING_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ERROR_PRODUCTS = 'ERROR_PRODUCTS';




export const getProducts = () => async (dispatch) => {
    dispatch({ type: GETTING_PRODUCTS});
    try {
        const res = await axios.get('http://localhost:4000/products/');
        await dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
        dispatch({ type: ERROR_PRODUCTS, payload: error.message });
    }
};