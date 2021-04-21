import React, { useEffect } from "react";

import "./MovieCard.css";
import convertDuration from "../../utils/DurationConverter";
import SavedMovies from "../SavedMovies/SavedMovies";

function MovieCard({
  cover,
  title,
  duration,
  type = "saved_movies",
  trailer,
  movie,
  onAddMovie,
  onMovieDelete,
  findFilms,
  savedMovies,
}) {
  // const savedMovieId = savedMovies.map((m) => {
  //   return m.movieId;
  // });

  //

  // React.useEffect(() => {
  //   compare(findFilms, savedMovieId);
  // }, [savedMovies, findFilms]);
  // console.log("savedMovieId", savedMovieId);
  console.log("findFilms", findFilms, "savedMovies", savedMovies);

  // const [isAdded, setIsAdded] = React.useState(false);

  // const toggleAddedState = () => {
  //   setIsAdded(!isAdded);
  // };

  function handleSaveBtnClick() {
    onAddMovie(movie);
    // toggleAddedState();
  }

  function handleDeleteBtnClick(evt) {
    evt.stopPropagation();
    onMovieDelete(movie);
    // toggleAddedState();
  }

  // const btnClassName = (

  // )

  const [id, setId] = React.useState(movie._id || "");

  const compareMovie = (movie, savedMovies) => {
    let id = "";
    savedMovies.forEach((item) => {
      if (item.movieId === movie.movieId) {
        console.log("compareMovie", id);
        id = item._id;
      }
    });
    return id;
  };

  React.useEffect(() => {
    if (type === "movies") {
      setId(compareMovie(movie, savedMovies));
    }
  }, [savedMovies, findFilms, type]);

  function hadleBtnClick(evt) {
    debugger;
    evt.stopPropagation(evt);
    if (id) {
      onMovieDelete(id);
    } else {
      onAddMovie(movie);
    }
  }

  const classNamebtn = `movie-card__btn ${
    type === "movies"
      ? id
        ? "movie-card__btn_type_added"
        : "movie-card__btn_type_save"
      : "movie-card__btn_type_delete"
  } `;

  return (
    <div className="movie-card">
      <div className="movie-card__movie">
        <a href={trailer} target="blank" rel="noreferrer">
          <img className="movie-card__cover" src={cover} alt={title} />
        </a>
        {/* {!isAdded && type === "movies" && (
          <button
            className="movie-card__btn movie-card__btn_type_save"
            onClick={handleSaveBtnClick}
          >
            Сохранить
          </button>
        )}
        {isAdded && type === "movies" && (
          <button
            className="movie-card__btn movie-card__btn_type_added"
            onClick={handleDeleteBtnClick}
          ></button>
        )}
        {type !== "movies" && (
          <button
            className="movie-card__btn movie-card__btn_type_delete"
            onClick={handleDeleteBtnClick}
          ></button>
        )} */}
        <button onClick={hadleBtnClick} className={classNamebtn}></button>
      </div>
      <div className="movie-card__caption">
        <p className="movie-card__title">{title}</p>
        <p className="movie-card__duration">{convertDuration(duration)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
