import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerNewStore, registerStore } from "../redux/auth/aut.actions";

const INITIAL_STATE = {
  // email: "",
  name:'',
  category: "", 
  address: "",
  phone: "",
  cif: "",
  web: "",
  photo: "",

  // products: [],
};

const NewStoreForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error} = useSelector(state => state.auth);
  const [form, setForm] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(registerNewStore(form, navigate))
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    if(value) ev.target.setCustomValidity('');

    setForm({
      ...form,
      [name]: value,
    });
  };


  return (
    <div className="formPage__container formPage__container--newStore">
      <h1 className="my-account__subheading">Añade tu comercio</h1>
      <form onSubmit={submit} className="formPage__form">
        <label className="formPage__label">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={changeInput}
            required
            placeholder="Nombre"
            className="formPage__input"
          />
        </label>
        {/* <label className="formPage__label formPage__label--file">
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={changeInput}
            placeholder="Imagen"
            className="formPage__input"
          />
        </label> */}
        {/* <label className="formPage__label">
          <select
            name="category"
            className="formPage__input formPage__input--select"
          >
            <option value="alimentacion">Alimentación</option>
          </select>
        </label> */}
        <label className="formPage__label">
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={changeInput}
            required
            placeholder="Categoria"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={changeInput}
            required
            placeholder="Dirección"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={changeInput}
            required
            placeholder="Teléfono"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="web"
            value={form.web}
            onChange={changeInput}
            required
            placeholder="Web"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="cif"
            value={form.cif}
            onChange={changeInput}
            required
            placeholder="CIF"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            name="photo"
            value={form.photo}
            onChange={changeInput}
            placeholder="photo"
            className="formPage__input"
          />
        </label>
        {/* <label className="formPage__label">
          <input
            type="text"
            name="products"
            value={form.products}
            onChange={changeInput}
            required
            placeholder="Productos"
            className="formPage__input"
          />
        </label> */}
        <button type="submit" className="login-btn login-btn--form">
          Añadir comercio
        </button>
      </form>
      {error && <h2 className="error">{error}</h2>}
    </div>
  );
};

export default NewStoreForm;
