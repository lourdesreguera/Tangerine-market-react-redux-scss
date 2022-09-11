import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../redux/shopping-cart/shopping-cart.actions";

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
      <h1>Este es tu carrito, {user.name}:</h1>
      {shoppingCart.map((product, key) => {
        return (
          <div key={key} className="shopping-cart__container">
            <div className="shopping-cart__container shopping-cart__container--item shopping-cart__container--image">
              <img
                src={product.photo}
                alt={product.name}
                className="shopping-cart__image"
              />
            </div>
            <p className="shopping-cart__container shopping-cart__container--item">
              {product.name}
            </p>
            <div className="shopping-cart__container shopping-cart__container--item">
              <p>Cantidad: {product.quantity}</p>
              <div>
                <button onClick={() => dispatch(increaseQuantity(key))}>
                  +
                </button>
                <button onClick={() => dispatch(decreaseQuantity(key))}>
                  -
                </button>
              </div>
            </div>
            <div className="shopping-cart__container shopping-cart__container--item">
              <p>Precio unidad: {product.price}€</p>
              <h3>Precio total: {product.price * product.quantity}€</h3>
            </div>
            <button onClick={() => dispatch(deleteProduct(key))}>X</button>
          </div>
        );
      })}
      <h3>Total de productos: {numberProducts}</h3>
      <h3>Precio total: {totalPrice}€</h3>
    </div>
  );
};

export default ShoppingCartPage;
