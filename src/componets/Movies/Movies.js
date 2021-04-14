import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import templateFilms from './initFilms';


function Movies ( {onClick, movies} ) {
  const [isSearched, setIsSearched] = React.useState(false);


  return (
    <section className="movies">
      <SearchForm onClick = {onClick}/>
      <MoviesCardList
        type = "movies"
        movies = {movies}
      />
      <button className = "movies__more">Ещё</button>
      <Preloader />
    </section>
  )
}

export default Movies;
