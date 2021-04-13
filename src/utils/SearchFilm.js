const shortFilmDuration = 50;

function searchFilm (keyWord, isShort, movie) {
  const { duration, country, description, director,  nameEN, nameRU, year } = movie;
  if(isShort) {
    if (duration < shortFilmDuration)
    return true;
  }
  if(country&&country.toLowerCase().includes(keyWord)){
    return true;
  }
  if(description&&description.toLowerCase().includes(keyWord)){
    return true;
  }
  if(director&&director.toLowerCase().includes(keyWord)){
    return true;
  }
  if(nameEN&&nameEN.toLowerCase().includes(keyWord)){
    return true;
  }
  if(nameRU&&nameRU.toLowerCase().includes(keyWord)){
    return true;
  }
  if(year&&year.toLowerCase().includes(keyWord)){
    return true;
  }
}

export default searchFilm;
