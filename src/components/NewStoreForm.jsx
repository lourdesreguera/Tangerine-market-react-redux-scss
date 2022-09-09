import React from "react";

const NewStoreForm = () => {
  return (
    <div className="formPage__container formPage__container--newStore">
      <h1 className="my-account__subheading">Añade tu comercio</h1>
      <form className="formPage__form">
        <label className="formPage__label">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label formPage__label--file">
          <input
            type="file"
            name="image"
            placeholder="Imagen"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <select
            name="category"
            className="formPage__input formPage__input--select"
          >
            <option value="alimentacion">Alimentación</option>
          </select>
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="cif"
            placeholder="CIF"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="web"
            placeholder="Web"
            className="formPage__input"
          />
        </label>
        <button type="submit" className="login-btn login-btn--form">
          Añadir comercio
        </button>
      </form>
    </div>
  );
};

export default NewStoreForm;
