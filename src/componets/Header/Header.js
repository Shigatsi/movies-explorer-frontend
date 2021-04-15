import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import movieExplorerLogo from '../../images/logo.svg';
import profileIcon from '../../images/profile_icon.svg'
import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header () {

  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
  }, 1000)


  return (
    <header className= "header">
      <Switch>
        <Route exact path = '/'>
          <img className="header__logo" src={movieExplorerLogo} alt="Логотип Movie Explorer"/>
          <nav className= "header__nav header__nav_type_default">
            <Link to = "sign-up" className = "header__default-link header__link_type_register">Регистрация</Link>
            <Link to = "sign-in" className = "header__default-link header__link_type_login">Войти</Link>
          </nav>
        </Route>
        <Route path = {['/movies', '/saved-movies', '/profile']}>
          <div className= "header__left-side">
          <img className="header__logo" src={movieExplorerLogo} alt="Логотип Me Explorer"/>
          { (width >= 786) && (
              <nav className= "header__nav header__nav_type_authorized">
              <Link to = "movies" className = "header__authorized-link">Фильмы</Link>
              <Link to = "saved-movies" className= "header__authorized-link">Сохранённые Фильмы</Link>
            </nav>
            )
          }
        </div>
        {
          (width >= 786) ? (
            <Link to = "profile" className = "header__authorized-link header__link_type_profile">
              <figure className = "header__profile">
                <img className=" header__profile-icon" src={profileIcon} alt="иконка профиля" />
                <figcaption className="heder__profile-caption">Аккаунт</figcaption>
              </figure>
            </Link>
          ) : (
           <Navigation />
          )
        }
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
