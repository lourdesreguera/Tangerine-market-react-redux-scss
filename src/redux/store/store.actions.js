import axios from "axios";

export const GETTING_STORE = "GETTING_STORE";
export const GET_STORE = "GET_STORE";
export const ERROR_STORE = "ERROR_STORE";

export const getStore = (id) => async (dispatch) => {
  dispatch({ type: GETTING_STORE });
  try {
    const res = await axios.get(`https://tangerine-market.herokuapp.com/stores/${id}`);
    await dispatch({ type: GET_STORE, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_STORE, payload: error.message });
  }
};
