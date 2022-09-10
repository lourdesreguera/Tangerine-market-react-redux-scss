import { login, register } from "../../api/auth.api";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_OK = "REGISTER_USER_OK";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";


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

export const registerUser = (user, navigate) => async dispatch => {
    try {
      dispatch({ type: REGISTER_USER_START });
      const response = await register(user);
  
      if (response && response._id) {
        // Se ha registrado el usuario
        dispatch({ type: REGISTER_USER_OK, payload: response });
        navigate('/');
      } else {
        // No se ha registrado correctamente
        dispatch({ type: REGISTER_USER_ERROR, payload: response });
      }
    } catch (error) {
      // Ha ocurrido algún problema haciendo el fetch o ejecutando javascript
      dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
    }
  };
  