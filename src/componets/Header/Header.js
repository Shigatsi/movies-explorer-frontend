import React from 'react';
import { Route, Link } from 'react-router-dom';

function Header () {
  return (
    <header>
       <img className="header__logo" src={movieExplorerLogo} alt="Логотип Movie Explorer"/>
      HERE IS HEADER!
    </header>

  );
}

export default Header;
