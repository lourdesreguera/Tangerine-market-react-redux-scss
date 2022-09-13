import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts } from "../redux/products/products.actions";
import { addShoppingCart } from "../redux/shopping-cart/shopping-cart.actions";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getProducts());
  }, []);


  return (
    // <>
    //   <CategoryNav />
    <div className="products">
      {isLoading && <h2>Cargando...</h2>}
      {products &&
        products.map((product) => {
          return (
            <div key={product._id} className="products__container">
              <div className="products__image-container">
                <img
                  className="products__image-img"
                  src={product.photo}
                  alt={product.name}
                />
              </div>
              <div>
                <div className="products__text">
                  <h2 className="stores__data stores__data--heading">
                    {products.name}
                  </h2>
                  <p className="">{product.description}</p>
                  <h3>{product.price} €</h3>
                </div>
                <div>
                  <NavLink to={`/stores/${product.store}`}>
                    <p>Ir a vendedor</p>
                  </NavLink>
                </div>
              </div>
              <button className="login-btn login-btn--products" onClick={() => dispatch(addShoppingCart(product))}>Añadir al Carrito</button>
            </div>
          );
        })}
      {error && <h2>{error}</h2>}
    </div>
    // </>
  );
};

export default ProductsPage;
