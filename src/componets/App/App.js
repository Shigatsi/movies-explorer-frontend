import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTooltip from "../InfoToolTip/InfoToolTip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import getMovies from "../../utils/MoviesApi";
import {
  register,
  authorize,
  getToken,
  getUserData,
  editUserData,
  getSavedMovies,
  addFilm,
  deleteMovie,
} from "../../utils/MainApi";
import findSuitableFilms from "../../utils/SearchFilm";
import { BASE_URL } from "../../utils/Constants";

function App() {
  const history = useHistory();

  //auth
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [succes, isSucces] = React.useState(false);
  const [isDataUpdate, setDataUpdate] = React.useState(false);

  React.useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [loggedIn]);

  React.useEffect(() => {
    tockenCheck();
  }, []);

  function handleRegister(data) {
    const { name, email, password } = data;
    register(name, email, password)
      .then(() => {
        // isSucces(true);
        history.push("/sign-in");
      })
      .catch(() => {
        // isSucces(false);
      });
  }

  function handleLogin(data) {
    const { email, password } = data;
    authorize(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => console.error(err)) //выведем ошибку;
      .finally(() => {
        handleUserData();
        handleGetSavedMovies();
      });
  }

  function tockenCheck() {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      getToken(jwt)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => console.error(err)) //выведем ошибку;
        .finally(() => {
          handleUserData();
          handleGetSavedMovies();
        });
    }
  }

  const hadleLogout = () => {
    setLoggedIn(false);
    console.log("delete movie from local storage update");
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    history.push("/sign-in");
  };

  const [currentUser, setCurrentUser] = React.useState({});

  function handleUserData() {
    getUserData()
      .then((userData) => {
        setCurrentUser(userData.data);
        // isSucces(true);
      })
      .catch((err) => {
        // isSucces(false);
        console.error(err);
      }); //выведем ошибку
  }

  //уведомление об ошибке/успехе при обновлении профиля
  const [succesEditProfile, isSuccesEditProfile] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };

  function handleProfileEdit(currentUser) {
    editUserData(currentUser)
      .then((userData) => {
        setDataUpdate(true);
        setCurrentUser(userData.data);
        isSuccesEditProfile(true);
        setIsInfoTooltipOpen(true);
        console.log("handleUserData", userData);
      })
      .catch((err) => {
        isSuccesEditProfile(false);
        setIsInfoTooltipOpen(true);
        console.error(err); //выведем ошибку;
      })
      .finally(() => setDataUpdate(false));
  }

  //movies
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [findFilms, setFindFilms] = React.useState([]);
  const [savedFindFilms, setSavedFindFilms] = React.useState([]);

  const [isSearch, setIsSearch] = React.useState(false);
  const [notFound, setNotfound] = React.useState(false);

  function movieConverter(movies) {
    return movies.map((movie) => {
      return {
        country: movie.country,
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        movieId: String(movie.id),
        image: movie.image ? `${BASE_URL}${movie.image.url}` : "",
        thumbnail: movie.image
          ? `${BASE_URL}${movie.image.formats.thumbnail.url}`
          : "",
        nameEN: movie.nameEN,
        nameRU: movie.nameRU,
        trailer: movie.trailerLink,
        year: movie.year,
      };
    });
  }

  function handleFilmSearch(keyWord, isShort) {
    setIsSearch(true);
    if (movies === []) {
      setFindFilms(findSuitableFilms(keyWord, isShort, movies));
      findFilms.length === 0 && setNotfound(true);
    } else {
      getMovies()
        .then((res) => {
          console.log(res);
          debugger;
          // setMovies(movieConverter(res));
          localStorage.setItem("movies", JSON.stringify(movies));
          setMovies(movieConverter(res));
          setFindFilms(findSuitableFilms(keyWord, isShort, movies));
          findFilms.length === 0 && setNotfound(true);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsSearch(false));
    }
    setIsSearch(false);
  }

  function handleSaveFilmSearch(keyWord, isShort) {
    setIsSearch(true);
    setSavedFindFilms(findSuitableFilms(keyWord, isShort, savedMovies));
    setIsSearch(false);
  }

  function handleGetSavedMovies() {
    getSavedMovies().then((res) => {
      setSavedMovies(res.data);
    });
  }

  function handleMovieAdd(movie) {
    if (savedMovies.every((m) => m.movieId != movie.movieId)) {
      return addFilm(movie)
        .then((res) => {
          setSavedMovies((movies) => [...movies, res.data]);
        })
        .catch((err) => console.error(err)); //выведем ошибку
    }
  }

  function handleDeleteMovie(id) {
    deleteMovie(id)
      .then((res) => {
        setSavedMovies(
          savedMovies.filter((m) => {
            return m._id !== id;
          })
        );
      })
      .catch((err) => console.error(err)); //выведем ошибку
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header loggedIn={loggedIn} />
            <ProtectedRoute
              loggedIn={loggedIn}
              path="/movies"
              onSearch={handleFilmSearch}
              // movies = {findFilms}
              isSearch={isSearch}
              notFound={notFound}
              component={Movies}
              onAddMovie={handleMovieAdd}
              onMovieDelete={handleDeleteMovie}
              findFilms={findFilms}
              savedMovies={savedMovies}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header loggedIn={loggedIn} />
            <ProtectedRoute
              loggedIn={loggedIn}
              path="/saved-movies"
              component={SavedMovies}
              savedMovies={savedMovies}
              isSearch={isSearch}
              onSearch={handleSaveFilmSearch}
              onMovieDelete={handleDeleteMovie}
              findFilms={findFilms}
              savedFindFilms={savedFindFilms}
              savedMovies={savedMovies}
            />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header loggedIn={loggedIn} />
            <ProtectedRoute
              loggedIn={loggedIn}
              logOut={hadleLogout}
              path="/profile"
              component={Profile}
              onEditProfile={handleProfileEdit}
              isDataUpdate={isDataUpdate}
            />
          </Route>
          <Route path="/sign-up">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/sign-in">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          isSuccess={succesEditProfile}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
