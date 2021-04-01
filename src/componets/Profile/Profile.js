import React from 'react';

import './Profile.css';

function Profile({  }) {

  const [isEdit, setIsEdit] = React.useState(false);

  const toggleEditState = () => {
    setIsEdit(!isEdit);
  }

  const [userData, setUserData] = React.useState({
    name: 'Евгения',
    email: 'jane@test.com'
  })

  function handleChangeUserData (evt) {
    const {name, value} = evt.target;
    setUserData({[name]:value})
  }


  function handleSubmit(e) {
    e.preventDefault();
  }
  return(
    <div className="profile">
      <form onSubmit={handleSubmit} className="profile__form">
        <h2 className= "profile__form-subtitle">Привет, {userData.name}!</h2>
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
              className="profile__form-input"
              value={userData.name}
              onChange={handleChangeUserData}/>
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
              className="profile__form-input"
              value={userData.email}
              onChange={handleChangeUserData}/>
          </li>
        </ul>
        {
        (isEdit)&&(
          <button
            type="submit"
            className = "profile__save-btn"
            onSubmit={handleSubmit}
          >Сохранить</button>
        )
      }
      </form>
      {
        (!isEdit)&&(
          <>
            <button className= "profile__btn profile__edit-btn" onClick={toggleEditState}>Редактировать</button>
            <button id="profile_logout-btn"className=" profile__btn profile__logout-btn">Выйти из аккаунта</button>
          </>
        )
      }


    </div>

    /* <span className='form__input-error form__input-error_hidden' id='form_input-error'></span> */
  )
};

export default Profile;
