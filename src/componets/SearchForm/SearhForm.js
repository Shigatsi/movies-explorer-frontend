import React from 'react';

import './SearchForm.css';
import searchBtn from '../../images/search_btn.svg'
import Switcher from '../Switcher/Switcher'

function SearchForm ({onSearch}) {

  const [keyWord, setKeyWord] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleChangeKeyWord (evt) {
    setKeyWord(evt.target.value)
  }

  function handleChangeDuration () {
    setIsShort(!isShort);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (keyWord === "") {
      setError(true)
    } else {
      setError(false)
      onSearch(keyWord, isShort)
    }
  }

  return (
    <form className = "search-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        id="form_film"
        name="film"
        minLength="2"
        maxLength="50"
        value = {keyWord}
        required
        placeholder="Фильм"
        className = "search-form__input"
        onChange = {handleChangeKeyWord}
      ></input>
      <button
        className= "search-form__btn"
        type="submit"
      >
        <img className ="search-form__btn-img" src={searchBtn} alt="лупа"/>
      </button>
      {error&&(<span className="search-form__input-error">Введите ключевое слово</span>)}

      <Switcher
        isOn = {isShort}
        handleToggle = {handleChangeDuration}
      />

    </form>
  )

}

export default SearchForm;
