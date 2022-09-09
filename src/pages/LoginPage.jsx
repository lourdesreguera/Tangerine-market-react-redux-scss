import React from "react";

const LoginPage = () => {
  return (
    <main className="formPage">
      <div className="formPage__container">
        <h1 className="formPage__heading formPage__heading--login">¡Bienvenido de nuevo!</h1>
        <form className="formPage__form">
          <label className="formPage__label">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="formPage__input"
            />
          </label>
          <label className="formPage__label">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="formPage__input"
            />
          </label>
          <button type="submit" className="login-btn login-btn--form">
            Entrar
          </button>
        </form>
        <p className="formPage__text">
          ¿No tienes cuenta? <a href="#" className="formPage__link">Regístrate</a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
