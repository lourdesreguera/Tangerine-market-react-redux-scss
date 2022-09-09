import { login } from "../../api/auth.api";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const loginUser = (user, navigate) => async dispatch => {
    try {
        dispatch({ type: LOGIN_USER_START });
        const response = await login(user);
        if (response && response._id) {
            dispatch({ type: LOGIN_USER_OK, payload: response });
            navigate('/my-account');
        } else {
            dispatch({ type: LOGIN_USER_ERROR, payload: response });
        }
    } catch (error) {
        dispatch({ type: LOGIN_USER_ERROR, payload: error.message });
    }
};