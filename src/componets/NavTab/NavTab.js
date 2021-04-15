import React from 'react';

import './NavTab.css'

function NavTab () {
  return (
    <div className = 'nav-tab'>
      <a href="#about"  className = "nav-tab__link">О проекте</a>
      <a href="#tech" className = "nav-tab__link">Технологии</a>
      <a href="#student" className = "nav-tab__link">Студентка</a>
    </div>


  );
}

export default NavTab;
