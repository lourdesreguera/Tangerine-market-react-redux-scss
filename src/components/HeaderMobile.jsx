import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth/aut.actions";

const HeaderMobile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <div className="header__content">
        <img
          src="./images/logo1.png"
          alt="Logo de Tangerine Market"
          className="header__logo"
        />
        <div className="header__container">
          {!user && (
            <Link to="/login" className="mobile-login-btn">
              log in
            </Link>
          )}
          {user && (
            <p
              className="mobile-login-btn"
              onClick={() => dispatch(logoutUser())}
            >
              log out
            </p>
          )}
          <Link to="/my-account">
            <img src="./images/person.svg" alt="My Account" className="icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
