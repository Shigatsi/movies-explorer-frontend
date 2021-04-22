import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

import FormHeader from "../FormHeader/FormHeader";
import useFormWithValidation from "../Validation/Validation";

function Login({ onLogin }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    setData(data);
  }, [data]);

  const {
    values = {
      email: data.email,
      password: data.password,
    },
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    if (data) {
      onLogin(values ? values : data);
    }
    return;
  }

  return (
    <section className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <FormHeader subtitle="Рады видеть!" />

        <ul className="form__items form__items_type_login">
          <li className="form__item">
            <label className="form__label">E-mail</label>
            <input
              type="email"
              id="form_email"
              name="email"
              minLength="3"
              maxLength="40"
              required
              className={`form__input ${
                errors.email ? "form__input_type_error" : ""
              } `}
              value={values.email}
              onChange={handleChange}
            />
            <label className="form__label">Password</label>
            <input
              type="password"
              id="form_password"
              name="password"
              minLength="8"
              maxLength="40"
              required
              className={`form__input ${
                errors.password ? "form__input_type_error" : ""
              } `}
              value={values.password}
              onChange={handleChange}
            />
            <span
              className={
                errors ? "form__input-error " : "form__input-error_hidden"
              }
            >
              {errors.email || errors.password}
            </span>
          </li>
        </ul>
        <button
          className={`form__submit-btn form__submit-btn_type_login ${
            errors.email || errors.password
              ? "form__submit-btn_type_disabled"
              : ""
          }`}
        >
          Войти
        </button>
        <p className="form__text">
          Ещё не зарегистрированы?
          <Link className="form__link" to="/sign-up">
            &nbsp;Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
