import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerNewStore } from "../redux/auth/aut.actions";

const INITIAL_STATE = {
  name: "",
  category: "",
  address: "",
  phone: "",
  cif: "",
  web: "",
  photo: "",
};

const NewStoreForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user } = useSelector((state) => state.auth);
  const [form, setForm] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(registerNewStore(form, user, navigate));
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    if (value) ev.target.setCustomValidity("");

    setForm({
      ...form,
      [name]: value,
    });
  };

  function changeInputFile(ev) {
    var reader = new FileReader();
    reader.onload = function (ev) {
      document.getElementById("img_file").setAttribute("value", ev.target.result);
      reader.readAsDataURL(ev.target.files[0]);
    };
  }


  // var reader = new FileReader();
  //   reader.onload = function (e) {
  //     document.getElementById("photo_img").setAttribute("src", e.target.result);
  //         reader.readAsDataURL(e.target.files[0]);

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
        <label className="formPage__label formPage__label--file">
          <input
            type="file"
            id="img_file"
            name="image"
            value={form.image}
            onChange={changeInputFile}
            placeholder="Imagen"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <select
            name="category"
            onChange={changeInput}
            className="formPage__input formPage__input--select"
            value={form.category}
          >
            <option value="categoria">Categoría</option>
            <option value="alimentacion">Alimentación</option>
            <option value="floristeria">Floristería</option>
            <option value="papeleria">Papelería</option>
            <option value="cosmetica">Cosmética</option>
          </select>
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
        <button type="submit" className="login-btn login-btn--form">
          Añadir comercio
        </button>
      </form>
      {error && <h2 className="error">{error}</h2>}
    </div>
  );
};

export default NewStoreForm;
