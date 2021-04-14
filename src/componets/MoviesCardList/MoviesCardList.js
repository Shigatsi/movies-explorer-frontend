import React from 'react';

import './MoviesCardList.css';

import MovieCard from '../MoviesCard/MovieCard';



function MoviesCardList ({ movies, type }) {
  console.log(movies)

  return (
  <section className = "movie-cardlist">
    {

      movies.map((movie) => (

        <MovieCard
          key = {movie.id}
          type = {type}
          // cover = {movie.cover}
          cover = {movie.image ? `https://api.nomoreparties.co${movie.image.url}` : ''}
          duration = {movie.duration}
          title = {movie.nameRU}

        />
      ))
    }
  </section>

  )
}

export default MoviesCardList;
