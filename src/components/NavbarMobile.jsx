import React from "react";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <div className="NavbarMobile-container">
      <div className="NavbarMobile-container__item">
        <div className="NavbarMobile-image">
          <img src="./images/home-black-mobile.png" alt="" />
        </div>
        <Link to="/" className="NavbarMobile-link">
          <h4 className="NavbarMobile-text">INICIO</h4>
        </Link>
      </div>
      <div className="NavbarMobile-container__item">
        <div className="NavbarMobile-image">
          <img src="./images/shop-black-mobile.png" alt="" />
        </div>
        <Link to="/stores" className="NavbarMobile-link">
          <h4 className="NavbarMobile-text">TIENDA</h4>
        </Link>
      </div>
      <div className="NavbarMobile-containe__item">
        <div className="NavbarMobile-image">
          <img src="./images/account-black-mobile.png" alt="" />
        </div>
        <Link to="/login" className="NavbarMobile-link">
          <h4 className="NavbarMobile-text">CUENTA</h4>
        </Link>
      </div>
      <div className="NavbarMobile-container__item">
        <div className="NavbarMobile-image">
          <img src="./images/shopping-cart-black-mobile.png" alt="" />
        </div>
        <Link to="/" className="NavbarMobile-link">
          <h4 className="NavbarMobile-text">CARRITO</h4>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMobile;
