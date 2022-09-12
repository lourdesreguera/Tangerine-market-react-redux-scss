import React from "react";
import NewStoreForm from "../components/NewStoreForm";
import { useSelector } from "react-redux";
import { useState } from "react";

const MyAccountPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [newStore, setnewStore] = useState(false);
  const [newProduct, setNewProduct] = useState(false);


  return (
    <main className="my-account">
      <h1 className="formPage__heading">¡Hola, {user.name}!</h1>
      <div className="my-account__container">
        <div className="my-account__container--left">
          <h2 className="my-account__subheading">Tus datos</h2>
          <ul className="my-account__data">
            <li className="my-account__li">
              <h3 className="my-account__label">Nombre: </h3>
              <p className="my-account__text">{user.name}</p>
            </li>
            <li className="my-account__li">
              <h3 className="my-account__label">Apellidos: </h3>
              <p className="my-account__text">{user.lastName}</p>
            </li>
            <li className="my-account__li">
              <h3 className="my-account__label">Teléfono: </h3>
              <p className="my-account__text">{user.phone}</p>
            </li>
            <li className="my-account__li">
              <h3 className="my-account__label">Email: </h3>
              <p className="my-account__text">{user.email}</p>
            </li>
          </ul>
        </div>
        {!user.store && (
          <div>
            <button
              className="login-btn login-btn--my-account"
              onClick={() => {
                setnewStore(true);
              }}
            >
              ¿Tienes un comercio? Date de alta gratis
            </button>
            {newStore && <NewStoreForm />}
          </div>
        )}
        {user.store && <div>
            <button
              className="login-btn login-btn--my-account"
              onClick={() => {
                setNewProduct(true);
              }}
            >
              Añade un producto a tu cuenta
            </button>
            {newProduct && <NewStoreForm />}
          </div>}
      </div>
    </main>
  );
};

export default MyAccountPage;
