import React from "react";

const CategoryNav = () => {
  return (
    <nav className="categoryNav">
      <div className="categoryNav__container">
        <a href="#" className="header__nav-link header__nav-link--categories">
          Alimentación
        </a>
        <a href="#" className="header__nav-link header__nav-link--categories">
          Floristerías
        </a>
      </div>
    </nav>
  );
};

export default CategoryNav;
