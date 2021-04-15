import React from 'react';

import './Portfolio.css';

import arrow from '../../images/arrow.svg';

function Portfolio () {
  return (
    <div className = 'portfolio'>
      <p className="portfolio__subtitle">Портфолио</p>
      <ul className="portfolio__links-list">
        <li className="potfolio__item">
          <a href="https://shigatsi.github.io/how-to-learn/" className="portfolio__link" target= "blank" rel = "noreferrer">
            Статичный сайт
          <img className="portfolio__img" src={arrow} alt = "стрелочка"/>
          </a>
        </li>
        <li className="potfolio__item">
          <a href="https://shigatsi.github.io/russian-travel/" className="portfolio__link" target= "blank" rel = "noreferrer">
            Адаптивный сайт
            <img className="portfolio__img" src={arrow} alt = "стрелочка"/>
          </a>
        </li>
        <li className="potfolio__item">
          <a href="https://shigatsimesto.students.nomoredomains.icu/" className="portfolio__link" target= "blank" rel = "noreferrer">
            Одностраничное приложение
            <img className="portfolio__img" src={arrow} alt = "стрелочка"/>
          </a>

        </li>
      </ul>
    </div>


  );
}

export default Portfolio;
