export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_CHART = 'UPDATE_PRODUCT';




export const addShoppingCart = (product) => (dispatch) => {
    dispatch({type: ADD_TO_SHOPPING_CART, payload: product});
}

export const increaseQuantity= (product) => dispatch => {
    dispatch({ type: INCREASE_QUANTITY, payload: product});
}

export const decreaseQuantity= (product) => dispatch => {
    dispatch({ type: DECREASE_QUANTITY, payload: product});
}

export const deleteProduct= (product) => dispatch => {
    dispatch({ type: DELETE_PRODUCT, payload: product});
}

export const deleteChart= () => dispatch => {
    dispatch({ type: DELETE_CHART });
}


