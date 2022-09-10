import React from "react";
import { Link } from "react-router-dom";

const StoresCategories = ({ stores }) => {
  return (
    <div className="stores">
      {stores &&
        stores.map((store) => {
          return (
            <div key={store._id} className="stores__container">
              <div>
                <img src={store.image} alt={store.name} />
              </div>
              <div>
                <Link to={`/stores/${store._id}`} className="stores__data stores__data--heading">
                  {store.name}
                </Link>
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
    </div>
  );
};

export default StoresCategories;
