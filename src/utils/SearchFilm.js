const shortFilmDuration = 50;

function searchFilm(keyWord, isShort, movie) {
  const {
    duration,
    country,
    description,
    director,
    nameEN,
    nameRU,
    year,
  } = movie;
  keyWord = keyWord.toLowerCase();
  if (isShort) {
    if (duration > shortFilmDuration) return false;
  }
  if (country && country.toLowerCase().includes(keyWord)) {
    return true;
  }
  if (description && description.toLowerCase().includes(keyWord)) {
    return true;
  }
  if (director && director.toLowerCase().includes(keyWord)) {
    return true;
  }
  if (nameEN && nameEN.toLowerCase().includes(keyWord)) {
    return true;
  }
  if (nameRU && nameRU.toLowerCase().includes(keyWord)) {
    return true;
  }
  if (year && year.toLowerCase().includes(keyWord)) {
    return true;
  }
  return false;
}

function findSuitableFilms(keyWord, isShort, movies) {
  return movies.filter((movie) => searchFilm(keyWord, isShort, movie));
}
export default findSuitableFilms;
