import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

const BASE_URL = "https://tangerine-market.herokuapp.com/";

export const login = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/login`, user, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logout = async (user) => {
  try {
    await axios.post(`${BASE_URL}/users/logout`, user, {
      withCredentials: true,
    });
    return null;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/register`, user, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const checkSession = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users/check-session`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const registerStore = async (store) => {
  try {
    axios.defaults.headers.post["Content-Type"] = "";

    const res = await axios.post(`${BASE_URL}/stores/create`, store, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
