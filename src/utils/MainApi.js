// import { BASE_MAIN_URL } from '../utils/Constants';
const baseUrlLocal = 'http://localhost:3001';

//проверки ответа сервера и преобразование из json
const checkRes = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

//auth

export const register = ( name, email, password ) => {
  console.log('main api register')
  return fetch(`${baseUrlLocal}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then(checkRes)
}

export const authorize = (email, password) => {
  return fetch(`${baseUrlLocal}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkRes);
};

//получаем токен
export const getToken = (token) => {
  return fetch(`${baseUrlLocal}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(checkRes);
}

//получаем информацию о пользователе
export const getUserData = () => {
  return fetch(`${baseUrlLocal}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(checkRes)
}

//редактируем данные пользователя
export const editUserData = (currentUser) => {
  return fetch(`${baseUrlLocal}/users/me`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      name: currentUser.name,
      email: currentUser.email
    })
  })
    .then(checkRes)
}

//получить сохранённые фильмы
export const getSavedMovies = () => {
  return fetch(`${baseUrlLocal}/movies`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
  .then(checkRes);
}

//сохранить фильм
export const addFilm =
  ({
    country,
    description,
    director,
    duration,
    movieId,
    image,
    thumbnail,
    nameEN,
    nameRU,
    trailer,
    year
  }) => {
    return fetch(`${baseUrlLocal}/movies`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      country:country,
      description:description,
      director:director,
      duration:duration,
      movieId:String(movieId),
      image:image,
      thumbnail:thumbnail,
      nameEN:nameEN,
      nameRU:nameRU,
      trailer:trailer,
      year:year
    })
    })
    .then(checkRes)
}

//удолить фильм
export const deleteMovie = (id)=> {
  return fetch(`${baseUrlLocal}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
  .then(checkRes);
}
