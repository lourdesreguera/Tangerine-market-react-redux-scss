import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <img src="./images/logo1.png" alt="Logo de Tangerine Market" />
        <nav>
          <a href="#">shop</a>
          <a href="#">about</a>
        </nav>
      </div>
      <div>
        <div>
          <img src="./images/shopping_cart.svg" alt="Shopping Cart" />
          <img src="./images/person.svg" alt="My Account" />
          <button>sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
