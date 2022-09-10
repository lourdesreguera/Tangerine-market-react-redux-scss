import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStores } from "../redux/stores/stores.actions";
import CategoryNav from "../components/CategoryNav";

const StoresPage = () => {
  const dispatch = useDispatch();
  const { stores, isLoading, error } = useSelector((state) => state.stores);

  useEffect(() => {
    dispatch(getStores());
  }, []);

  return (
    <>
      <CategoryNav />
      <div className="stores">
        {isLoading && <h2>Cargando...</h2>}
        {stores &&
          stores.map((store) => {
            return (
              <div key={store._id} className="stores__container">
                <div>
                  <img src={store.image} />
                </div>
                <div>
                  <a href="#" className="stores__data stores__data--heading">
                    {store.name}
                  </a>
                  <p className="stores__address">{store.address}</p>
                  <a
                    href="tel:{store.phone}"
                    className="stores__data stores__data--phone"
                  >
                    {store.phone}
                  </a>
                </div>
              </div>
            );
          })}
        {error && <h2>{error}</h2>}
      </div>
    </>
  );
};

export default StoresPage;
