import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStore } from "../redux/store/store.actions";

const StoreDetailPage = () => {
  const { store } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getStore(id));
    id = '';
    console.log(id)
  }, []);

  return (
    <div>
    {/* { store.map(product => {
        return (<h1>{product.name}</h1>)
    })} */}
      {store && (
        <div>
          <h1>{store.name}</h1>
          <div>
            <p>{store.address}</p>
            <p>{store.phone}</p>
          </div>
          {/* <div>
            {store.products.map((product) => {
              return (
                <div key={product._id}>
                  <img src={product.photo} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default StoreDetailPage;
