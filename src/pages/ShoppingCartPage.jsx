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
  const { user } = useSelector(
    (state) => state.auth
  );

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
          <div key={key}>
            <p>{product.name}</p>
            <p>Precio: {product.price}€</p>
            <button onClick={() => dispatch(increaseQuantity(key))}>+1</button>
            <p>Cantidad: {product.quantity}</p>
            <button onClick={() => dispatch(decreaseQuantity(key))}>-1</button>
            <button onClick={() => dispatch(deleteProduct(key))}>
              Eliminar
            </button>
            <h3>Precio total: {product.price * product.quantity}€</h3>
          </div>
        );
      })}
      <h3>Total de productos: {numberProducts}</h3>
      <h3>Precio total: {totalPrice}€</h3>
    </div>
  );
};

export default ShoppingCartPage;
