import {BASE_URL} from './Constants';

const getMovies = () => {
  return fetch (`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export default getMovies;
