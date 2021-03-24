import React from 'react';
import { Route, Link } from 'react-router-dom';
import movieExplorerLogo from '../../images/logo.svg';
import './Header.css';

function Header () {
  return (
    <header className = "header">
       <img className="header__logo" src={movieExplorerLogo} alt="Логотип Movie Explorer"/>
      HERE IS HEADER!
    </header>

  );
}

export default Header;
