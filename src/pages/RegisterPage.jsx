import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/auth/aut.actions";

const INITIAL_STATE = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error} = useSelector(state => state.auth);
  const [form, setForm] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(registerUser(form, navigate))
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    if(value) ev.target.setCustomValidity('');

    setForm({
      ...form,
      [name]: value,
    });
  };

  const setCustomMessage = (ev) => {
    ev.target.setCustomValidity('Debes completar este campo, sabandija asquerosa');
  }
  return (
    <main className="formPage">
      <div className="formPage__container">
        <h1 className="formPage__heading">Regístrate</h1>
        <form  onSubmit={submit} className="formPage__form">
          <label className="formPage__label">
            <input type="text" name="name" value={form.name} onChange={changeInput} placeholder="Nombre" className="formPage__input" onInvalid={(ev) => setCustomMessage(ev)} required/>
          </label>
          <label className="formPage__label">
            <input type="text" name="lastName" placeholder="Apellidos" className="formPage__input" value={form.lastName} onChange={changeInput} required/>
          </label>
          <label className="formPage__label">
            <input type="text" name="phone" placeholder="Teléfono" className="formPage__input" value={form.phone} onChange={changeInput}/>
          </label>
          <label className="formPage__label">
            <input type="email" name="email" placeholder="Email" className="formPage__input" value={form.email} onChange={changeInput} required />
          </label>
          <label className="formPage__label">
            <input 
              type="password" 
              name="password" 
              placeholder="Contraseña" 
              className="formPage__input"
              value={form.password}
              onChange={changeInput}
              required
              pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
              title="La contraseña no cumple las reglas. 8 carácteres, 1 mayúscula y 1 número"
            />
          </label>
          <button type="submit" className="login-btn login-btn--form">Registrarse</button>
        </form>
        {error && <h2 className="error">{error}</h2>}
      </div>
    </main>
  );
};

export default RegisterPage;
