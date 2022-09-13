import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../redux/shopping-cart/shopping-cart.actions";
import MediaQuery from "react-responsive";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { shoppingCart, numberProducts } = useSelector(
    (state) => state.shoppingCart
  );
  const { user } = useSelector((state) => state.auth);

  let listCart = [];
  let totalPrice = 0;

  Object.keys(shoppingCart).forEach(function (product) {
    totalPrice += shoppingCart[product].quantity * shoppingCart[product].price;
    listCart.push(shoppingCart[product]);
  });

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart__title">Este es tu carrito, {user.name}:</h1>
      {shoppingCart.map((product, key) => {
        return (
          <>
            <MediaQuery minWidth={800}>
              <div key={key} className="shopping-cart__container">
                <div className="shopping-cart__container"></div>
                <div className="shopping-cart__container shopping-cart__container--item shopping-cart__container--image">
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="shopping-cart__image"
                  />
                </div>
                <p className="shopping-cart__container shopping-cart__container--item store-detail__text store-detail__text--cart">
                  {product.name}
                </p>
                <div className="shopping-cart__container shopping-cart__container--item">
                  <p className="shopping-cart__quantity">
                    Cantidad: {product.quantity}
                  </p>
                  <div className="shopping-cart__quantity-btns">
                    <button
                      className="btn-quantity"
                      onClick={() => dispatch(increaseQuantity(key))}
                    >
                      +
                    </button>
                    <button
                      className="btn-quantity"
                      onClick={() => dispatch(decreaseQuantity(key))}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="shopping-cart__container shopping-cart__container--item shopping-cart__container--price">
                  <p className="shopping-cart__p">
                    Precio unidad: {product.price}€
                  </p>
                  <h3 className="store-detail__text store-detail__text--cart">
                    Precio total: {product.price * product.quantity}€
                  </h3>
                </div>
                <button
                  className="btn-quantity btn-quantity--delete"
                  onClick={() => dispatch(deleteProduct(key))}
                >
                  X
                </button>
              </div>
            </MediaQuery>

            <MediaQuery maxWidth={800}>
              <div className="shopping-cart__container shopping-cart__container--mobile">
                <div className="shopping-cart__container">
                  <div className="shopping-cart__container shopping-cart__container--item shopping-cart__container--image">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="shopping-cart__image"
                    />
                  </div>
                  <p className="shopping-cart__container shopping-cart__container--item store-detail__text store-detail__text--cart">
                    {product.name}
                  </p>
                  <div className="shopping-cart__container shopping-cart__container--item">
                    <p className="shopping-cart__quantity">
                      Cantidad: {product.quantity}
                    </p>
                    <div className="shopping-cart__quantity-btns">
                      <button
                        className="btn-quantity"
                        onClick={() => dispatch(increaseQuantity(key))}
                      >
                        +
                      </button>
                      <button
                        className="btn-quantity"
                        onClick={() => dispatch(decreaseQuantity(key))}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="shopping-cart__container">
                  <div className="shopping-cart__container shopping-cart__container--item shopping-cart__container--price">
                    <p className="shopping-cart__p">
                      Precio unidad: {product.price}€
                    </p>
                    <h3 className="store-detail__text store-detail__text--cart">
                      Precio total: {product.price * product.quantity}€
                    </h3>
                  </div>
                  <button
                    className="btn-quantity btn-quantity--delete"
                    onClick={() => dispatch(deleteProduct(key))}
                  >
                    X
                  </button>
                </div>
              </div>
            </MediaQuery>
          </>
        );
      })}
      <div className="shopping-cart__resume">
        <h3 className="shopping-cart__total">
          Total de productos: {numberProducts}
        </h3>
        <h3 className="shopping-cart__total">Precio total: {totalPrice}€</h3>
        <Link to="/order-confirm" className="login-btn login-btn--chart">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
