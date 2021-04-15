import React from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import templateFilms from './templateFilms';

function SavedMovies () {
  return(
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        type = "saved_movies"
        movies = {templateFilms}
    />
    </section>
  )
}

export default SavedMovies;
