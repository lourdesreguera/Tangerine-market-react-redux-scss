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
          <div className="products">
            {isLoading && <h2>Cargando...</h2>}
            {products &&
              products.map((product) => {
                return (
                  <div key={product._id} className="products__container">
                    <div>
                      <img src={product.photo} alt={product.name}/>
                    </div>
                    <div>
                      
                        <h2>{product.name}</h2>
                      
                      <p className="stores__address">{product.description}</p>
                      <div>
                        <h4>
                            {product.price}
                        </h4>
                      </div>
                      <div>
                        <div>
                          <NavLink to={`/stores/${product.store}`}>                      
                            <p>Ir a vendedor</p>
                          </NavLink>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="products__text">
                    <a href="#" className="stores__data stores__data--heading">
                      {products.name}
                    </a>
                    <h5 className="">{product.description}</h5>
                    <p>{product.price}</p>
                  </div>
                 <button type="submit" className="login-btn login-btn--products">Añadir al Carrito</button>                  
                </div>
              );
            })}
          {error && <h2>{error}</h2>}
        </div>
      </>
    );

}

export default ProductsPage;