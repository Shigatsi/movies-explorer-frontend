import React from 'react';

import './SearchForm.css';
import searchBtn from '../../images/search_btn.svg'
import Switcher from '../Switcher/Switcher'

function SearchForm () {
  return (
    <div className = "search-form">
      <input className = "search-form__input" placeholder="Фильм"></input>
      <button className= "search-form__btn">
        <img className ="search-form__btn-img" src={searchBtn} alt="лупа"/>
      </button>
      <Switcher />

    </div>
  )

}

export default SearchForm;
