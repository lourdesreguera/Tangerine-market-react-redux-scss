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
          <img
            src="./images/logo1.png"
            alt="Logo de Tangerine Market"
            className="header__logo"
          />
          <nav className="header__nav">
            <div className="header__nav-container">
              <NavLink to="/stores" className="header__nav-link" activeClassName='active' >
                shop
              </NavLink>
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
            <Link to='/my-account'><img src="./images/person.svg" alt="My Account" className="icon" /></Link>
            <img
              src="./images/shopping_cart.svg"
              alt="Shopping Cart"
              className="icon"
            />
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
