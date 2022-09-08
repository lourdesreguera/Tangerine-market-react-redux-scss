import React from "react";

const HeaderDesk = () => {
  return (
    <header className="header">
      <div classname="header--desk">
        <div className="header__content">
          <div className="header__container">
            <img
              src="./images/logo1.png"
              alt="Logo de Tangerine Market"
              className="header__logo--desk"
            />
            <nav className="header__nav">
              <div className="header__nav-container">
                <a href="#" className="header__nav-link">
                  shop
                </a>
              </div>
              <div className="header__nav-container">
                <a href="#" className="header__nav-link">
                  about
                </a>
              </div>
            </nav>
          </div>
          <div className="header__container">
            <div className="header__container header__container--icons">
              <img
                src="./images/person.svg"
                alt="My Account"
                className="icon"
              />
              <img
                src="./images/shopping_cart.svg"
                alt="Shopping Cart"
                className="icon"
              />
            </div>
            <button className="login-btn">sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesk;
