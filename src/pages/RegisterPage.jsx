import React from "react";

const RegisterPage = () => {
  return (
    <main className="formPage">
      <div className="formPage__container">
        <h1 className="formPage__heading">Regístrate</h1>
        <form className="formPage__form">
          <label className="formPage__label">
            <input type="text" name="name" placeholder="Nombre" className="formPage__input" />
          </label>
          <label className="formPage__label">
            <input type="text" name="surname" placeholder="Apellidos" className="formPage__input" />
          </label>
          <label className="formPage__label">
            <input type="email" name="email" placeholder="Email" className="formPage__input" />
          </label>
          <label className="formPage__label">
            <input type="password" name="password" placeholder="Contraseña" className="formPage__input" />
          </label>
          <button type="submit" className="login-btn login-btn--form">Registrarse</button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
