import React from "react";

const CategoryNav = ({handleCategory}) => {

  const showCategory = (ev) => {
    handleCategory(ev.target.innerHTML)
  }

  const showAll = () => {
    handleCategory(null)
  }

  return (
    <nav className="categoryNav">
      <div className="categoryNav__container">
      <p className="header__nav-link header__nav-link--categories" onClick={ showAll } >
          Todo
        </p>
        <p className="header__nav-link header__nav-link--categories" onClick={ showCategory }>
          Alimentacion
        </p>
        <p className="header__nav-link header__nav-link--categories" onClick={ showCategory }>
          Floristeria
        </p>
        <p className="header__nav-link header__nav-link--categories" onClick={ showCategory }>
          Papeleria
        </p>
        <p className="header__nav-link header__nav-link--categories" onClick={ showCategory }>
          Belleza
        </p>
      </div>
    </nav>
  );
};

export default CategoryNav;
