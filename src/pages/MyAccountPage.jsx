import React from "react";
import NewStoreForm from "../components/NewStoreForm";

const MyAccountPage = () => {
  return (
    <main className="my-account">
      <h1 className="formPage__heading">¡Hola, Juan!</h1>
      <div className="my-account__container">
        <div className="my-account__container--left">
          <h2 className="my-account__subheading">Tus datos</h2>
          <ul className="my-account__data">
            <li>Nombre:</li>
            <li>Apellidos:</li>
            <li>Teléfono:</li>
            <li>Email:</li>
          </ul>
        </div>
        <div>
          <button className="login-btn login-btn--my-account">
            ¿Tienes un comercio? Date de alta gratis
          </button>
          <NewStoreForm />
        </div>
      </div>
    </main>
  );
};

export default MyAccountPage;
