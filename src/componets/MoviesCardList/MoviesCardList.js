import React from 'react';

import './MoviesCardList.css';

import MovieCard from '../MoviesCard/MovieCard';



function MoviesCardList ({ movies, type }) {
  return (
  <section className = "movie-cardlist">
    {
      movies.map((movie) => (
        <MovieCard
          type = {type}
          cover = {movie.cover}
          duration = {movie.duration}
          title = {movie.name}

        />
      ))
    }
  </section>

  )
}

export default MoviesCardList;
