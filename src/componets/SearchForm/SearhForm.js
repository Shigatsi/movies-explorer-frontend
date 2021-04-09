import React from 'react';

import './SearchForm.css';
import searchBtn from '../../images/search_btn.svg'
import Switcher from '../Switcher/Switcher'

function SearchForm () {
  return (
    <div className = "search-form">
      <input
        type="text"
        id="form_film"
        name="film"
        minLength="2"
        maxLength="50"
        pattern="[а-яёА-ЯЁA-Za-z \-]*"
        required
        placeholder="Фильм"
        className = "search-form__input"
      ></input>
      <button className= "search-form__btn">
        <img className ="search-form__btn-img" src={searchBtn} alt="лупа"/>
      </button>
      <Switcher />

    </div>
  )

}

export default SearchForm;
