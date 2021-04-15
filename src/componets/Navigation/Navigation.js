import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Navigation.css';
import burgerIcon from '../../images/burger_icon.svg';
import closeBurgerIcon from '../../images/close-burger_icon.svg';
import profileIcon from '../../images/profile_icon.svg'

function Navigation () {

  const [navigationMenu, setNavigationMenu] = React.useState(false);

  const toggleNavigationMenu = () => { setNavigationMenu(!navigationMenu)};

  return (
    <>
      <div className="navigation">
        <Link to ='#' className="navigation__bars">
          <img className = "navigation__btn" src={burgerIcon} onClick= {toggleNavigationMenu}/>
        </Link>
      </div>
      <nav className = {navigationMenu ? "navigation-menu navigation-menu_type_active" : "navigation-menu" }>
        <div className = "navigation-menu__content">
          <div className = "navigation-menu__top">
            <Link to ='#' className="navigation__bars">
              <img className = "navigation__btn-close" src={closeBurgerIcon} onClick = {toggleNavigationMenu}/>
            </Link>
            <Link to = '/' className = "navigation-menu__link">Главная</Link>
            <Link to = '/movies' className = "navigation-menu__link" onClick = {toggleNavigationMenu}>Фильмы</Link>
            <Link to = '/saved-movies' className = "navigation-menu__link" onClick = {toggleNavigationMenu}>Сохранённые фильмы</Link>
          </div>
          <Link to = "profile" className = "navigation-menu__link navigation-menu__link_type_profile" onClick = {toggleNavigationMenu}>
            <figure className = "navigation-menu__profile">
              <img className="navigation-menu__profile-icon" src={profileIcon} alt="иконкапрофиля" />
              <figcaption className="navigation-menu__profile-caption">Аккаунт</figcaption>
            </figure>
          </Link>
        </div>
      </nav>
    </>
  )
};

export default Navigation;
