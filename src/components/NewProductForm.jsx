import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerNewProduct } from '../redux/products/products.actions';

const INITIAL_STATE = {
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    photo: '',
};

const NewProductForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, user } = useSelector(state => state.auth);
    const [form, setForm] = useState(INITIAL_STATE);

    const submit = (ev) => {
        ev.preventDefault();
        const store = user.store;
        dispatch(registerNewProduct(form, store, navigate));
    };

    const changeInput = (ev) => {
        const { name, value } = ev.target;

        if (value) ev.target.setCustomValidity("");

        setForm({
            ...form,
            [name]: value,
        })
    };

  return (
    <div className="formPage__container formPage__container--newStore">
      <h1 className="my-account__subheading">Añade nuevo producto</h1>
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
        <label className="formPage__label">
          <textarea
            name="description"
            value={form.description}
            onChange={changeInput}
            required
            placeholder="Descripción"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={changeInput}
            required
            placeholder="Cantidad"
            className="formPage__input"
          />
        </label>
        <label className="formPage__label">
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={changeInput}
            required
            placeholder="Precio"
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
        <button type="submit" className="login-btn login-btn--form">
          Añadir producto
        </button>
      </form>
      {error && <h2 className="error">{error}</h2>}
    </div>
  )
}

export default NewProductForm
