import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts } from "../redux/products/products.actions";

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
                  <h2 className="store-detail__text">{product.name}</h2>
                  <h3 className="product-price-color">{product.price} €</h3>
                </div>

                <NavLink
                  to={`/stores/${product.store}`}
                  className="stores__data stores__data--footer"
                >
                  <p>Ir a vendedor</p>
                </NavLink>
              </div>
              <button type="submit" className="login-btn login-btn--products">
                Añadir al Carrito
              </button>
            </div>
          );
        })}
      {error && <h2>{error}</h2>}
    </div>
    // </>
  );
};

export default ProductsPage;
