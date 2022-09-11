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
                    <div>
                      <img width="300px" src={product.photo} alt={product.name}/>
                    </div>
                    <div>
                      <a href="#" className="stores__data stores__data--heading">
                        {product.name}
                      </a>
                      <p className="stores__address">{product.description}</p>
                      <div>
                        <p>
                            {product.price}
                        </p>
                      </div>
                      <div>
                      <div>
                      <NavLink to={`/stores/${product.store}`}>
                      {/* <p>{product.store}</p> */}
                      <p>Ir a vendedor</p>
                      </NavLink>
                      </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {error && <h2>{error}</h2>}
          </div>
        // </>
      );

}

export default ProductsPage;