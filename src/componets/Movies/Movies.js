import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import templateFilms from './initFilms';

function Movies (  ) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        type = "movies"
        movies = {templateFilms}
      />
      <button className = "movies__more">Ещё</button>
      <Preloader />
    </section>
  )
}

export default Movies;
