import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import getMovies from '../../utils/MoviesApi';
import findSuitableFilms from '../../utils/SearchFilm';

function App() {

  //auth

  //movies

  const [movies, setMovies] = React.useState([]);
  const [isSearch, setIsSearch] = React.useState(false);

  function handleFilmSearch (keyWord, isShort, movies) {
    setIsSearch(true)
    console.log(isSearch)
    getMovies()
      .then((movies)=> {
        setMovies(movies)
        findSuitableFilms(keyWord, isShort, movies)
        console.log(keyWord, isShort)
      })
    .catch(err => console.error(err))
    .finally(()=>setIsSearch(false))
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path = '/'>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path = '/movies'>
          <Header />
          <Movies
            onClick = {handleFilmSearch}
            movies = {movies}
            isSearch = {isSearch}
          />
          <Footer />
        </Route>
        <Route path = '/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path = '/profile'>
          <Header />
          <Profile />
        </Route>
        <Route path = '/sign-up'>
          <Register />
        </Route>
        <Route path = '/sign-in'>
          <Login />
        </Route>
        <Route path = '*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
