import React from 'react';

import './MoviesCardList.css';

import MovieCard from '../MoviesCard/MovieCard';

function MoviesCardList ({ movies, type, notFound, amountMovie }) {


    console.log(movies.length, notFound, amountMovie)


  return (
  <section className = "movie-cardlist">
    {
      (movies.length===0 && notFound)&&(<p>По вашему запросу ничего не найдено</p>)
    }
    {
      movies
      .filter((item, id)=> id < amountMovie)
      .map((movie) => (
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
