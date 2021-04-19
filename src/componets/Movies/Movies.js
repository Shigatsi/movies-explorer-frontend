import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import useViewportWidth from '../../utils/useViewportWidth';

function Movies ( {onClick, movies, isSearch, notFound,  onAddMovie } ) {

  const {width} = useViewportWidth();

  const [cardIncrement, setCardIncrement] = React.useState(4);
  const [moviesToShow, setMoviesToSow] = React.useState(12);
  const [moreMovies, setMoreMovies] = React.useState(0);


  React.useEffect (()=> {
    if (width <= 1280) {
      setCardIncrement(3)
    }
    if (width <= 1024) {
      setCardIncrement (2)
      setMoviesToSow(8);
    }
    if (width <= 765) {
      setMoviesToSow(5);
    }
  }, [width])



  function handleMoreBtn () {
    setMoreMovies((prevState)=>prevState + cardIncrement)
    console.log(moreMovies)
  }

  return (
    <section className="movies">
      <SearchForm onClick = {onClick}/>
      {(isSearch)? (
        <Preloader />
      ): (
        <>
          <MoviesCardList
          type = "movies"
          movies = {movies} //.slice(0, moviesToShow+moreMovies)
          notFound = {notFound}
          amountMovie = {moviesToShow+moreMovies}
          onAddMovie={onAddMovie}
          />
         {(moviesToShow+moreMovies < movies.length)&& <button className = "movies__more" onClick={handleMoreBtn}>Ещё</button>}
        </>
      )}
    </section>
  )
}

export default Movies;
