import React from "react";

import "./MoviesCardList.css";

import MovieCard from "../MoviesCard/MovieCard";

function MoviesCardList({
  movies,
  type,
  notFound,
  amountMovie,
  onAddMovie,
  onMovieDelete,
  findFilms,
  savedMovies,
}) {
  return (
    <section className="movie-cardlist">
      {movies.length === 0 && notFound && (
        <p>По вашему запросу ничего не найдено</p>
      )}
      {type === "movies"
        ? movies
            .filter((movie, id) => id < amountMovie)
            .map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.movieId}
                type={type}
                cover={movie.image}
                duration={movie.duration}
                title={movie.nameRU}
                trailer={movie.trailer}
                onAddMovie={onAddMovie}
                onMovieDelete={onMovieDelete}
                findFilms={findFilms}
                savedMovies={savedMovies}
              />
            ))
        : movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.movieId}
              // type = {type}
              cover={movie.image}
              duration={movie.duration}
              title={movie.nameRU}
              trailer={movie.trailer}
              onAddMovie={onAddMovie}
              onMovieDelete={onMovieDelete}
              findFilms={findFilms}
              savedMovies={savedMovies}
            />
          ))}
    </section>
  );
}
export default MoviesCardList;
