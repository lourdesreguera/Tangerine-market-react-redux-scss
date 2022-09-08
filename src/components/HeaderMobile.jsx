import React from "react";

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
          <button className="mobile-login-btn">sign in</button>
          <img src="./images/person.svg" alt="My Account" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
