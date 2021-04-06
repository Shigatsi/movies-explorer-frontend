import React from 'react';

import './MovieCard.css';

function MovieCard ( { cover, title, duration, type } ) {

  const [isAdded, setIsAdded] = React.useState(false);

  const toggleAddedState = () => {
    setIsAdded(!isAdded);
    console.log(isAdded)
  }


  return (
    <div className ="movie-card">
        <div className = "movie-card__movie">
          <img className = "movie-card__cover" src = {cover} alt = {title}/>
          {
            (!isAdded) && (
              <button className="movie-card__btn movie-card__btn_type_save" onClick={toggleAddedState}>Сохранить</button>
            )
          }
          {
            (isAdded&& type==='movies') ? (
              <button className="movie-card__btn movie-card__btn_type_added" onClick={toggleAddedState}></button>
            ) : (
              <button className="movie-card__btn movie-card__btn_type_delete"></button>
            )
          }


        </div>
        <div className = "movie-card__caption">
          <p className = "movie-card__title">{title}</p>
          <p className = "movie-card__duration">{duration}</p>
        </div>
    </div>
  )
}

export default MovieCard;
