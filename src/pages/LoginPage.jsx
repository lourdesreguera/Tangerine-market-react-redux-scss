import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/aut.actions";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector((state) => state.auth);
  const [form, setform] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(loginUser(form, navigate));
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  return (
    <main className="formPage">
      <div className="formPage__container">
        {isLoading && <h2>Logeando usuario...</h2>}

        {!isLoading && (
          <>
            <h1 className="formPage__heading formPage__heading--login">
              ¡Bienvenido de nuevo!
            </h1>
            <form onSubmit={submit} className="formPage__form">
              <label className="formPage__label">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={changeInput}
                  required
                  placeholder="Email"
                  className="formPage__input"
                />
              </label>
              <label className="formPage__label">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={changeInput}
                  required
                  pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
                  title="La contraseña debe incluir 8 carácteres, 1 mayúscula y 1 número"
                  placeholder="Contraseña"
                  className="formPage__input"
                />
              </label>
              <button type="submit" className="login-btn login-btn--form">
                Entrar
              </button>
            </form>
            <p className="formPage__text">
              ¿No tienes cuenta?{" "}
              <Link to="/register" className="formPage__link">
                Regístrate
              </Link>
            </p>
          </>
        )}
        {error && <h2>{error}</h2>}
      </div>
    </main>
  );
};

export default LoginPage;
