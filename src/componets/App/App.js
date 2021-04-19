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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import getMovies from '../../utils/MoviesApi';
import {
  register,
  authorize,
  getToken,
  getUserData,
  editUserData,
  addFilm
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

  function handleLogin (data) {
    const {email,password} =data;
    authorize(email, password)
    .then((res)=>{
      localStorage.setItem('token', res.token)
      setLoggedIn(true)
      history.push('/movies')
    })
    .catch(err => console.error(err));//выведем ошибку;
  }

  function tockenCheck () {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      getToken(jwt)
      .then((res)=> {
        setLoggedIn(true)
      })
      .catch(err => console.error(err));//выведем ошибку;
    }
  }

  React.useEffect(() => {
    tockenCheck();
  }, []);

  const [CurrentUser, setCurrentUser] = React.useState({})

  React.useEffect(()=>{
    getUserData()
    .then((userData)=>{
      setCurrentUser(userData.data);
    })
    .catch(err => console.error(err));//выведем ошибку
  }, [])

  function handleProfileEdit (currentUser) {
    console.log('handleProfileEdit ', currentUser)
    editUserData(currentUser)

    .then((userData)=>{

      setCurrentUser(userData.data);
    })
    .catch(err => console.error(err));//выведем ошибку;
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
        movieId: String(movie.id),
        thumbnail:movie.image ? `${BASE_URL}${movie.image.url}` : '',
        image: movie.image ? `${BASE_URL}${movie.image.formats.thumbnail.url}` : '',
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

  function handleMovieAdd (movie) {
    console.log("App", movie)
    console.log(typeof(movie.movieId))
    addFilm(movie)
    .then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path = '/'>
          <Header loggedIn= {loggedIn}/>
          <Main />
          <Footer />
        </Route>
        <CurrentUserContext.Provider value={CurrentUser}>
          <Route path = '/movies'>
            <Header loggedIn= {loggedIn}/>
            <ProtectedRoute
              loggedIn={loggedIn}
              path = '/movies'
              onClick = {handleFilmSearch}
              movies = {findFilms}
              isSearch = {isSearch}
              notFound = {notFound}
              component = {Movies}
              onAddMovie={handleMovieAdd}
            />
            <Footer />
          </Route>
          <Route path = '/saved-movies'>
            <Header loggedIn= {loggedIn}/>
            <ProtectedRoute
              loggedIn={loggedIn}
              path = '/saved-movies'
              component = {SavedMovies}
            />
            <Footer />
          </Route>
          <Route path = '/profile'>
            <Header loggedIn= {loggedIn}/>
            <ProtectedRoute
              loggedIn={loggedIn}
              path = '/profile'
              component = {Profile}
              onEditProfile = {handleProfileEdit}
            />
          </Route>
          <Route path = '/sign-up'>
            <Register
              onRegister = {handleRegister}
            />
          </Route>
          <Route path = '/sign-in'>
            <Login
              onLogin = {handleLogin}
            />
          </Route>
        </CurrentUserContext.Provider>
        <Route path = '*'>
            <PageNotFound />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
