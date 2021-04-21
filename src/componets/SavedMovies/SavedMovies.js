import React from "react";

import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearhForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  savedMovies,
  onMovieDelete,
  findFilms,
  onSearch,
  isSearch,
  savedFindFilms,
  test,
}) {
  console.log(test);
  console.log("SavedMovies", savedMovies.length);
  console.log("SavedMovies + savedFindFilms", savedFindFilms);

  return (
    <section className="movies">
      <SearchForm onSearch={onSearch} />
      {isSearch ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={savedFindFilms.length === 0 ? savedMovies : savedFindFilms}
          onMovieDelete={onMovieDelete}
          findFilms={findFilms}
          savedMovies={savedMovies}
        />
      )}
    </section>
  );
}

export default SavedMovies;
