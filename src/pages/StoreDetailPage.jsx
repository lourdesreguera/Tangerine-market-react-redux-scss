import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStore } from "../redux/store/store.actions";
import { addShoppingCart } from "../redux/shopping-cart/shopping-cart.actions";

const StoreDetailPage = () => {
  const { store } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getStore(id));
  }, []);

  return (
    <div className="store-detail">
      {store && (
        <>
          <h1 className="store-detail__name">{store.name}</h1>
          {/*   <div>
            <p className="store-detail__text">Dirección: <span className="store-detail__text store-detail__text--span">{store.address}</span></p>
            <p className="store-detail__text">Teléfono: <a className="stores__data stores__data--phone store-detail__text--span" href={"tel:{store.phone}"}>{store.phone}</a></p>
          </div> */}
          <div>
            {/* <h2>Productos:</h2> */}
            <div className="store-detail__products">
              {store.products.map((product) => {
                return (
                  <div key={product._id} className="store-detail__product">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="store-detail__image"
                    />
                    <h2 className="store-detail__text">{product.name}</h2>
                    <h3 className="product-price-color">{product.price}€</h3>
                    <button
                      className="login-btn login-btn--products"
                      onClick={() => dispatch(addShoppingCart(product))}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="store-detail__text">
                Dirección:{" "}
                <span className="store-detail__text store-detail__text--span">
                  {store.address}
                </span>
              </p>
              <p className="store-detail__text">
                Teléfono:{" "}
                <a
                  className="stores__data stores__data--phone store-detail__text--span"
                  href={"tel:{store.phone}"}
                >
                  {store.phone}
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StoreDetailPage;
