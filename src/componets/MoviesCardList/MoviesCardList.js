import React from 'react';

import './MoviesCardList.css';

import MovieCard from '../MoviesCard/MovieCard';

function MoviesCardList ({ movies, type }) {
  return (
  <section className = "movie-cardlist">
    {
      movies.map((movie) => (
        <MovieCard
          key = {movie.movieId}
          type = {type}
          cover = {movie.image}
          duration = {movie.duration}
          title = {movie.nameRU}
          trailer = {movie.trailer}

        />
      ))
    }
  </section>

  )
}

export default MoviesCardList;
