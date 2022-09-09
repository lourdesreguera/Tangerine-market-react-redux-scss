import React from "react";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img
          src="./images/logo1.png"
          alt="Logo de Tangerine Market"
          className="header__logo"
        />
        <div className="header__container">
          <Link to='/login' className="mobile-login-btn">log in</Link>
          <img src="./images/person.svg" alt="My Account" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
