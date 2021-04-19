import React from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies ({ savedMovies }) {
  return(
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        type = "saved_movies"
        movies = {savedMovies}
    />
    </section>
  )
}

export default SavedMovies;
