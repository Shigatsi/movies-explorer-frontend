import React from 'react';

import './SearchForm.css';
import searchBtn from '../../images/search_btn.svg'
import Switcher from '../Switcher/Switcher'

function SearchForm () {

  const [keyWord, setKeyWord] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);

  function handleChangeKeyWord (evt) {
    setKeyWord(evt.target.value)
  }

  function handleChangeDuration () {
    setIsShort(!isShort);
  }

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
        onChange = {handleChangeKeyWord}
      ></input>
      <button
        className= "search-form__btn"
        // onClick = {searchBtnHandler}
      >
        <img className ="search-form__btn-img" src={searchBtn} alt="лупа"/>
      </button>
      <Switcher
        isOn = {isShort}
        handleToggle = {handleChangeDuration}
      />

    </div>
  )

}

export default SearchForm;
