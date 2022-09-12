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

    const formData = new FormData();
    formData.append("photo", form.photo);
    formData.append("name", form.name);
    formData.append("address", form.address);
    formData.append("cif", form.cif);
    formData.append("web", form.web);
    formData.append("category", form.category);
    formData.append("phone", form.phone);

    dispatch(registerNewStore(formData, user, navigate));
    console.log(form);
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    if (value) ev.target.setCustomValidity("");

    if (name !== "photo") {
      setForm({
        ...form,
        [name]: value,
      });
    } else {
      var reader = new FileReader();
      reader.onloadend = () => {
        setForm({
          ...form,
          photo: reader.result,
        });
      };
      reader.readAsDataURL(ev.target.files[0]);
    }
  };

  // var reader = new FileReader();
  //   reader.onload = function (e) {
  //     document.getElementById("photo_img").setAttribute("src", e.target.result);
  //         reader.readAsDataURL(e.target.files[0]);

  return (
    <div className="formPage__container formPage__container--newStore">
      <h1 className="my-account__subheading">Añade tu comercio</h1>
      <form
        onSubmit={submit}
        className="formPage__form"
        encType="multipart/form-data"
      >
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
            name="photo"
            // value={form.photo}
            onChange={changeInput}
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
            <option value="belleza">Belleza</option>
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
