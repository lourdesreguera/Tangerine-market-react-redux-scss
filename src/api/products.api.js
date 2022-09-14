import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

const BASE_URL = "http://localhost:4000";

export const registerProduct = async (product) => {
  try {
    const res = await axios.post(`${BASE_URL}/products/new`, product, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
