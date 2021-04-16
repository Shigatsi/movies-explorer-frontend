import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearhForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import useViewportWidth from '../../utils/useViewportWidth';

function Movies ( {onClick, movies, isSearch} ) {

  const width = useViewportWidth();




  let cardIncrement = 4;
  let moviesToShow = 12;
  // const [cardIncrement, setCardIncrement] = React.useState(4);
  // const [btnVisibility, setBtnVisibility] = React.useState(true);
  // const [moviesToShow, setMoviesToSow] = React.useState(12);


  React.useEffect (()=> {
    if (width <= 1280) {
      console.log('work?')
    }
  }, [width])

      if (width <= 1280) {
        console.log('1280')
        cardIncrement = 3;
      } else if (width <= 1024) {
        console.log('1024')
        moviesToShow = 8;

      } else if (width <= 765) {
        console.log('765')
        moviesToShow = 5;
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
          movies = {movies} //.slice(0, moviesToShow)
          />
          <button className = "movies__more">Ещё</button>
        </>
      )}
    </section>
  )
}

export default Movies;
