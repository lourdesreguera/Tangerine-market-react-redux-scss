import axios from "axios";

export const GETTING_STORES = "GETTING_STORES";
export const GET_STORES = "GET_STORES";
export const ERROR_STORES = "ERROR_STORES";

export const getStores = () => async (dispatch) => {
  dispatch({ type: GETTING_STORES });
  try {
    const res = await axios.get("http://localhost:4000/stores/");
    await dispatch({ type: GET_STORES, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_STORES, payload: error.message });
  }
};
