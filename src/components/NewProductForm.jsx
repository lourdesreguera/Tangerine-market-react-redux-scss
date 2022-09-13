import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerNewProduct } from "../redux/products/products.actions";
import { useForm } from "react-hook-form";

const NewProductForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);
  const { store } = useSelector((state) => state.store);

  const submit = (data) => {
    const formData = new FormData();
    formData.append("photo", data.photo[0]);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);

    dispatch(registerNewProduct(formData, store, navigate));
  };

  const addProduct = () => {
    alert('Producto añadido')
  }

  return (
    <div className="formPage__container formPage__container--newStore">
      <h1 className="my-account__subheading">Añade nuevo producto</h1>
      <form onSubmit={handleSubmit(submit)} className="formPage__form" encType="multipart/form-data">
        <label className="formPage__label">
          <input
            type="text"
            {...register("name")}
            required
            placeholder="Nombre"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <textarea
            {...register("description")}
            required
            placeholder="Descripción"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="number"
            {...register("quantity")}
            required
            placeholder="Cantidad"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="number"
            {...register("price")}
            required
            placeholder="Precio"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="file"
            {...register("photo")}
            placeholder="photo"
            className="formPage__input"
          />
        </label>
        <button type="submit" className="login-btn login-btn--form" onClick={addProduct}>
          Añadir producto
        </button>
      </form>
      {error && <h2 className="error">{error}</h2>}
    </div>
  );
};

export default NewProductForm;
