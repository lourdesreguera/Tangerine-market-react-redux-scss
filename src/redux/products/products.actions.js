import axios from "axios";
import { registerProduct } from "../../api/products.api";

export const GETTING_PRODUCTS = "GETTING_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ERROR_PRODUCTS = "ERROR_PRODUCTS";

export const REGISTER_PRODUCT_START = "REGISTER_PRODUCT_START";
export const CREATE_PRODUCT_OK = "CREATE_PRODUCT_OK";
export const REGISTER_PRODUCT_ERROR = "REGISTER_PRODUCT_ERROR";
// export const UPDATE_COMMERCE_PRODUCT = "UPDATE_COMMERCE_PRODUCT";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GETTING_PRODUCTS });
  try {
    const res = await axios.get("https://tangerine-market.herokuapp.com/products/");
    await dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_PRODUCTS, payload: error.message });
  }
};

export const registerNewProduct =
  (product, store, navigate) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_PRODUCT_START });
      const res = await registerProduct(product);

      if (res && res._id) {
        dispatch({ type: CREATE_PRODUCT_OK, payload: res });
        // dispatch({ type: UPDATE_COMMERCE_PRODUCT, payload: store._id });

        const newStore = { ...store, products: [...store.products, res._id] };
        await axios.put(
          `https://tangerine-market.herokuapp.com/stores/edit/${store._id}`,
          newStore,
          { withCredentials: true }
        );

        const newProduct = { ...product, store: store };
        await axios.put(
          `https://tangerine-market.herokuapp.com/products/edit/${res._id}`,
          newProduct,
          { withCredentials: true }
        );

        navigate("/my-account");
      } else {
        dispatch({ type: REGISTER_PRODUCT_ERROR, payload: res });
      }
    } catch (error) {
      dispatch({ type: REGISTER_PRODUCT_ERROR, payload: error.message });
    }
  };
