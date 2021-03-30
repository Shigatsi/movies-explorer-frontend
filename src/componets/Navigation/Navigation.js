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
        <Link to ='#' className="navigation__bars">
          <img className = "navigation__btn-close" src={closeBurgerIcon} onClick = {toggleNavigationMenu}/>
        </Link>
        <div className = "navigatio-menu__top">
          <Link to = '/'>Главная</Link>
          <Link to = '/movies'>Фильмы</Link>
          <Link to = '/saved-movies'>Сохранённые фильмы</Link>
        </div>
        <Link to = "profile" className = "">
          <figure className = "">
            <img className=" " src={profileIcon} alt="иконкапрофиля" />
            <figcaption className="">Аккаунт</figcaption>
          </figure>
        </Link>
      </nav>
    </>
  )
};

export default Navigation;
