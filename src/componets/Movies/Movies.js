import React from "react";

import "./Movies.css";
import SearchForm from "../SearchForm/SearhForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import useViewportWidth from "../../utils/useViewportWidth";

function Movies({
  onSearch,
  movies,
  isSearch,
  notFound,
  onAddMovie,
  onMovieDelete,
  savedMovies,
  findFilms,
}) {
  const { width } = useViewportWidth();

  const cardIncrementNumber = {
    big: 4,
    medium: 3,
    small: 2,
  };

  const moviesToShowNumber = {
    big: 12,
    medium: 8,
    small: 5,
  };

  const [cardIncrement, setCardIncrement] = React.useState(
    cardIncrementNumber.big
  ); //4
  const [moviesToShow, setMoviesToSow] = React.useState(moviesToShowNumber.big);
  const [moreMovies, setMoreMovies] = React.useState(0);

  React.useEffect(() => {
    if (width <= 1280) {
      setCardIncrement(cardIncrementNumber.medium);
    }
    if (width <= 1024) {
      setCardIncrement(cardIncrementNumber.small);
      setMoviesToSow(moviesToShowNumber.medium);
    }
    if (width <= 765) {
      setMoviesToSow(moviesToShowNumber.small);
    }
  }, [width]);

  function handleMoreBtn() {
    setMoreMovies((prevState) => prevState + cardIncrement);
  }
  return (
    <section className="movies">
      <SearchForm onSearch={onSearch} />
      {isSearch ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            type="movies"
            // movies = {movies} //.slice(0, moviesToShow+moreMovies)
            movies={findFilms}
            notFound={notFound}
            amountMovie={moviesToShow + moreMovies}
            onAddMovie={onAddMovie}
            onMovieDelete={onMovieDelete}
            findFilms={findFilms}
            savedMovies={savedMovies}
          />
          {moviesToShow + moreMovies < findFilms.length && (
            <button className="movies__more" onClick={handleMoreBtn}>
              Ещё
            </button>
          )}
          {/* movies.length */}
        </>
      )}
    </section>
  );
}

export default Movies;
