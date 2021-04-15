import React from 'react';

import './MoviesCardList.css';

import MovieCard from '../MoviesCard/MovieCard';
import {BASE_URL} from '../../utils/Constants';


function MoviesCardList ({ movies, type }) {
  return (
  <section className = "movie-cardlist">
    {
      movies.map((movie) => (
        <MovieCard
          key = {movie.id}
          type = {type}
          cover = {movie.image ? `${BASE_URL}${movie.image.url}` : ''}
          duration = {movie.duration}
          title = {movie.nameRU}
          trailer = {movie.trailerLink}

        />
      ))
    }
  </section>

  )
}

export default MoviesCardList;
