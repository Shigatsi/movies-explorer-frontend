import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'

function Movies ( {onClick, movies, isSearch} ) {

  return (
    <section className="movies">
      <SearchForm onClick = {onClick}/>
      {(isSearch)? (
        <Preloader />
      ): (
        <>
          <MoviesCardList
          type = "movies"
          movies = {movies}
          />
          <button className = "movies__more">Ещё</button>
        </>
      )}
    </section>
  )
}

export default Movies;
