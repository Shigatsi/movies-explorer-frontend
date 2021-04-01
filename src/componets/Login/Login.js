import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

import FormHeader from '../FormHeader/FormHeader';

function Login () {
  return (
    <section className="login">
      <form className = "login__form">
        <FormHeader
          subtitle = 'Рады видеть!'
        />

        <ul className="form__items form__items_type_login">
          <li className= "form__item">
          <label className="form__label">Имя</label>
            <input
              type="text"
              id="form_name"
              name="name"
              minLength="2"
              maxLength="40"
              pattern="[а-яёА-ЯЁA-Za-z \-]*"
              required
              className="form__input"
              // value={values.name}
              // onChange={handleChange}
              />
          </li>
          <li className="form__item">
            <label className="form__label">E-mail</label>
            <input
              type="email"
              id="form_email"
              name="email"
              minLength="3"
              maxLength="40"
              required
              className="form__input"
              // value={values.email}
              // onChange={handleChange}
            />
            <span className = "form__input-error form__input-error_hidden">Что-то пошло не так...</span>
          </li>
        </ul>
        <button className="form__submit-btn form__submit-btn_type_login" >Войти</button>
        <p className="form__text">
          Ещё не зарегистрированы?
          <Link className="form__link" to = "/sign-up">&nbsp;Регистрация</Link>
        </p>

      </form>
    </section>

  )
}

export default Login;
