import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

import FormHeader from '../FormHeader/FormHeader';

function Register ({ onRegister, ...props }) {
  const [data, setUserData] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  function handleChange (e) {
    const {name, value} = e.target;
    setUserData({
      ...data,
      [name]:value
    })
  }

  function hadleSubmit (e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    if(data) {
      onRegister(data);
      console.log(data)
    }
    return
  }


  return (
    <section className="register">
      <form onSubmit={hadleSubmit} className = "register__form">
        <FormHeader
          subtitle = 'Добро пожаловать!'
        />
        <ul className="form__items form__items_type_register">
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
              value={data.name}
              onChange={handleChange}
              />
          </li>
          <li className= "form__item">
            <label className="form__label">E-mail</label>
            <input
              type="email"
              id="form_email"
              name="email"
              minLength="3"
              maxLength="40"
              required
              className="form__input"
              value={data.email}
              onChange={handleChange}
            />
          </li>
          <li className="form__item">
            <label className="form__label">Password</label>
            <input
              type="password"
              id="form_password"
              name="password"
              minLength="8"
              maxLength="40"
              required
              className="form__input"
              value={data.password}
              onChange={handleChange}
            />
            <span className = "form__input-error form__input-error_hidden">Что-то пошло не так...</span>
          </li>
        </ul>
        <button
          className="form__submit-btn form__submit-btn_type_register">Зарегистрироваться</button>
        <p className="form__text">
        Уже зарегистрированы?
          <Link className="form__link" to = "/sign-in">&nbsp;Войти</Link>
        </p>
      </form>
    </section>
  )
}

export default Register;
