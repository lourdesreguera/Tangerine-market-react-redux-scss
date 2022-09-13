import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth/aut.actions";

const HeaderDesk = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return (
    <header className="header header--desk">
      <div className="header__content">
        <div className="header__container">
          <Link to="/">
            <img
              src="./images/logo1.png"
              alt="Logo de Tangerine Market"
              className="header__logo"
            />
          </Link>
          <nav className="header__nav">
            <div className="header__nav-container">
              <NavLink
                to="/stores"
                className="header__nav-link header__nav-link--hover-header"
                activeclassname="active"
              >
                shop
              </NavLink>
            </div>
            <div className="header__nav-container">
              <NavLink
                to="/products"
                className="header__nav-link header__nav-link--hover-header"
                activeclassname="active"
              >
                products
              </NavLink>
            </div>
            <div className="header__nav-container">
              <NavLink
                to="/about"
                className="header__nav-link header__nav-link--hover-header"
                activeclassname="active"
              >
                about
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="header__container">
          <div className="header__container header__container--icons">
            <Link to="/my-account">
              <img
                src="./images/person.svg"
                alt="My Account"
                className="icon"
              />
            </Link>
            <Link to="/shopping-cart">
              <img
                src="./images/shopping_cart.svg"
                alt="Shopping Cart"
                className="icon"
              />
            </Link>
          </div>
          {!user && (
            <Link to="/login" className="login-btn">
              log in
            </Link>
          )}
          {user && (
            <button
              className="login-btn"
              onClick={() => dispatch(logoutUser())}
            >
              log out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderDesk;
