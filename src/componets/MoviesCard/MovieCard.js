import React from 'react';

import './MovieCard.css';
import convertDuration from '../../utils/DurationConverter';

function MovieCard ( { cover, title, duration, type, trailer, movie, onAddMovie } ) {

  const [isAdded, setIsAdded] = React.useState(false);

  const toggleAddedState = () => {
    setIsAdded(!isAdded);
  }

  function handleSaveBtnClick () {
    onAddMovie(movie)
    toggleAddedState()
  }

  return (
    <div className ="movie-card">
        <div className = "movie-card__movie">
          <a href = {trailer} target= "blank" rel = "noreferrer">
          <img className = "movie-card__cover" src = {cover} alt = {title} /></a>
          {
            (!isAdded&&type==='movies') && (
              <button className="movie-card__btn movie-card__btn_type_save" onClick={handleSaveBtnClick}>Сохранить</button>
            )
          }
          {
            (isAdded&&type==='movies')&&(
              <button className="movie-card__btn movie-card__btn_type_added" onClick={toggleAddedState}></button>
            )
          }
          {(type!=='movies')&&
            (
              <button className="movie-card__btn movie-card__btn_type_delete"></button>
            )
          }


        </div>
        <div className = "movie-card__caption">
          <p className = "movie-card__title">{title}</p>
          <p className = "movie-card__duration">{convertDuration(duration)}</p>
        </div>
    </div>
  )
}

export default MovieCard;
