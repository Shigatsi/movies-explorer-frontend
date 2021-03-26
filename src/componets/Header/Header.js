import React from 'react';
import { Route, Link } from 'react-router-dom';
import movieExplorerLogo from '../../images/logo.svg';
import './Header.css';

function Header ({isLoggedIn = false}) {
  return (
    <header className = {`header ${isLoggedIn ? "header_type_logged-in": "header_type_default"}`}>
       <img className="header__logo" src={movieExplorerLogo} alt="Логотип Movie Explorer"/>
       {
        (isLoggedIn) ? (
          'logged-in header'
        ) : (
          <nav className= "header__nav header__nav_type_default">
            <Link to = "sign-up" className = "header__default-link header__link_type_register">Регистрация</Link>
            <Link to = "sign-in" className = "header__default-link header__link_type_login">Войти</Link>
          </nav>

        )
      }
    </header>

  );
}

export default Header;
