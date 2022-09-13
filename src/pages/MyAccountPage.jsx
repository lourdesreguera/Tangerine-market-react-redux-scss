import React from "react";
import NewStoreForm from "../components/NewStoreForm";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";
import NewProductForm from "../components/NewProductForm";
import { getStore } from "../redux/store/store.actions";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const MyAccountPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { store } = useSelector((state) => state.store);
  const { stores } = useSelector((state) => state.stores);
  const [newStore, setnewStore] = useState(false);
  const [newProduct, setNewProduct] = useState(false);
  const dispatch = useDispatch();

  const contexto = useContext(ShoppingCartContext);
  const tiendas = [];

  // if (contexto.shoppingCart) {
  //   for (let i = 0; i < contexto.shoppingCart.length; i++) {
  //     const filtro = stores.find((store) =>
  //       store.products.includes(contexto.shoppingCart[i].id)
  //     );
  //     tiendas.push(filtro.owner);
  //   }
  // }
  // console.log(tiendas);

  useEffect(() => {
    if (user.store) {
      dispatch(getStore(user.store));
    }
  }, []);

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

          {/* {store && store.products && (
            <div>
              <h2>Tus productos:</h2>
              <div>
                {store.products.map((product) => {
                  return (
                    <div key={product._id}>
                      <p>Nombre:{product.name}</p>
                      <p>Precio: {product.price}€</p>
                      <p>Cantidad: {product.quantity}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )} */}
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

        {user.store && (
          <div>
            <button
              className="login-btn login-btn--my-account"
              onClick={() => {
                setNewProduct(true);
              }}
            >
              Añade un producto a tu cuenta
            </button>
            {newProduct && <NewProductForm />}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyAccountPage;
