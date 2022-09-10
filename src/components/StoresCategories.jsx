import React from "react";

const StoresCategories = ({ stores }) => {
  return (
    <div className="stores">
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
    </div>
  );
};

export default StoresCategories;
