import React from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../Validation/Validation";
import "./Profile.css";

function Profile({ onEditProfile, logOut, isDataUpdate }) {
  const [isEdit, setIsEdit] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const {
    values = {
      name: name,
      email: email,
    },
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const toggleEditState = () => {
    setIsEdit(!isEdit);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onEditProfile({
      name: values.name ? values.name : name,
      email: values.email ? values.email : email,
    });
    toggleEditState();
  }

  return (
    <div className="profile">
      <form onSubmit={handleSubmit} className="profile__form" noValidate>
        <h2 className="profile__form-subtitle">Привет, {currentUser.name}!</h2>
        <ul className="profile__form-items">
          <li className="profile__form-item">
            <label className="profile__form-label">Имя</label>
            <input
              type="text"
              id="form_name"
              name="name"
              minLength="2"
              maxLength="40"
              pattern="[а-яёА-ЯЁA-Za-z \-]*"
              required
              readOnly={!isEdit || isDataUpdate}
              className={`profile__form-input ${
                errors.name ? "form__input_type_error" : ""
              } `}
              value={values.name}
              onChange={handleChange}
            />
          </li>
          <li className="profile__form-item">
            <label className="profile__form-label">E-mail</label>
            <input
              type="email"
              id="form_email"
              name="email"
              minLength="3"
              maxLength="40"
              required
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              readOnly={!isEdit || isDataUpdate}
              className={`profile__form-input ${
                errors.email ? "form__input_type_error" : ""
              } `}
              value={values.email}
              onChange={handleChange}
            />
          </li>
        </ul>
        {isEdit && errors && (
          <span className="profile__input-error" id="form_input-error">
            {errors.name || errors.email}
          </span>
        )}
        {isEdit && (
          <button
            type="submit"
            className={`profile__save-btn ${
              errors.name || errors.email
                ? "profile__save-btn_type_disabled"
                : ""
            }`}
          >
            Сохранить
          </button>
        )}
      </form>
      {!isEdit && (
        <>
          <button
            className="profile__btn profile__edit-btn"
            onClick={toggleEditState}
          >
            Редактировать
          </button>
          <button
            onClick={logOut}
            id="profile_logout-btn"
            className=" profile__btn profile__logout-btn"
          >
            Выйти из аккаунта
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;
