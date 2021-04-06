import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import templateFilms from '../../utils/initFilms';

function Movies (  ) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        type = "movies"
        movies = {templateFilms}
      />
      <button className = "movies__more" >Ещё</button>
    </section>
  )
}

export default Movies;
