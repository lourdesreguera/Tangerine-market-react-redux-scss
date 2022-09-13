import React from "react";
import { useSelector } from "react-redux";

const OrderConfirmation = () => {
  const { shoppingCart } = useSelector((state) => state.shoppingCart);
  // console.log(shoppingCart);

  return (
    <main className="orderConfirm">
      <h1>¡Tu pedido se ha completado con éxito!</h1>
      <p>Puedes pasar por tienda para formalizar el pago y recoger tu pedido</p>
      <div>
        <h2>Estos son tus productos adquiridos:</h2>
        <div>
          {shoppingCart && shoppingCart.map(product => {
            return (
              <div key={product._id}>
                <img src={product.photo} alt={product.name} />
                <p>{product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio total: {product.quantity * product.price}€</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
