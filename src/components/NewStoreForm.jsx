import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerNewStore } from "../redux/auth/aut.actions";
import { useForm } from "react-hook-form";

const NewStoreForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user } = useSelector((state) => state.auth);

  const submit = (data) => {
    const formData = new FormData();
    formData.append("photo", data.photo[0]);
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("cif", data.cif);
    formData.append("web", data.web);
    formData.append("category", data.category);
    formData.append("phone", data.phone);

    dispatch(registerNewStore(formData, user, navigate));
  };

  const addStore = () => {
    alert('Producto añadido')
  }

  return (
    <div className="formPage__container formPage__container--newStore">
      <h1 className="my-account__subheading">Añade tu comercio</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="formPage__form"
        encType="multipart/form-data"
      >
        <label className="formPage__label">
          <input
            type="text"
            {...register("name")}
            required
            placeholder="Nombre"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label formPage__label--file">
          <input
            type="file"
            id="img_file"
            {...register("photo")}
            placeholder="Imagen"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <select
            {...register("category")}
            className="formPage__input formPage__input--select"
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
            {...register("address")}
            required
            placeholder="Dirección"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            {...register("phone")}
            required
            placeholder="Teléfono"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            {...register("web")}
            placeholder="Web"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="text"
            {...register("cif")}
            required
            placeholder="CIF"
            className="formPage__input"
          />
        </label>
        <button type="submit" className="login-btn login-btn--form" onClick={addStore}>
          Añadir comercio
        </button>
      </form>
      {error && <h2 className="error">{error}</h2>}
    </div>
  );
};

export default NewStoreForm;
