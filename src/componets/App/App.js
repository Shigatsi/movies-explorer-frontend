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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import getMovies from '../../utils/MoviesApi';
import {
  register,
} from '../../utils/MainApi';
import findSuitableFilms from '../../utils/SearchFilm';
import {BASE_URL} from '../../utils/Constants'


function App() {

  const history = useHistory();

  //auth
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [succes, isSucces] = React.useState(false);

  React.useEffect(() => {
    if(loggedIn) {
      history.push('/movies')
    }
  }, [loggedIn]);

  function handleRegister (data) {

    console.log('REGISTER', data)
      const { name, email, password } = data;
      register(name, email, password)
        .then(()=>{
          isSucces(true);
          history.push('/sign-in')
        })
        .catch(()=>{
          isSucces(false);
        })
  }

  //movies

  const [movies, setMovies] = React.useState(JSON.parse(localStorage.getItem("movies")) ||[]);
  const [findFilms, setFindFilms] = React.useState([]);

  const [isSearch, setIsSearch] = React.useState(false);
  const [notFound, setNotfound] = React.useState(false);

  function movieConverter (movies) {
    return movies.map((movie)=>{
     return {
        country: movie.country,
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        movieId: movie.id,
        image: movie.image ? `${BASE_URL}${movie.image.url}` : '',
        nameEN: movie.nameEN,
        nameRU: movie.nameRU,
        trailer: movie.trailerLink,
        year: movie.year
      }
    })
  }

  function handleFilmSearch (keyWord, isShort) {
    setIsSearch(true)
    getMovies()
      .then((res)=> {
        console.log(res)
        setMovies(movieConverter(res));
        localStorage.setItem("movies", JSON.stringify(movies));
        setFindFilms(findSuitableFilms(keyWord, isShort, movies));
        findFilms.length===0&&setNotfound(true);
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
        <ProtectedRoute
          loggedIn={loggedIn}
          path = '/movies'>
          <Header />
          <Movies
            onClick = {handleFilmSearch}
            movies = {findFilms}
            isSearch = {isSearch}
            notFound = {notFound}
          />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute
          loggedIn={loggedIn}
          path = '/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute
          loggedIn={loggedIn}
          path = '/profile'>
          <Header />
          <Profile />
        </ProtectedRoute>
        <Route path = '/sign-up'>
          <Register
            onRegister = {handleRegister}
          />
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
