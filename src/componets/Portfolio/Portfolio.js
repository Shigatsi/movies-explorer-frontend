import React from 'react';

import './Portfolio.css';

import arrow from '../../images/arrow.svg';

function Portfolio () {
  return (
    <div className = 'portfolio'>
      <p className="portfolio__subtitle"></p>
      <ul className="portfolio__links-list">
        <li className="potfolio__item">
          <a hreh="https://shigatsi.github.io/how-to-learn/" className="portfolio__link">Статичный сайт</a>
          <img className="portfolio__img" src={arrow} alt = "стрелочка"/>
        </li>
        <li className="potfolio__item">
          <a hreh="https://shigatsi.github.io/russian-travel/" className="portfolio__link">Адаптивный сайт</a>
          <img className="portfolio__img" src={arrow} alt = "стрелочка"/>
        </li>
        <li className="potfolio__item">
          <a hreh="https://shigatsimesto.students.nomoredomains.icu/" className="portfolio__link">Одностраничное приложение</a>
          <img className="portfolio__img" src={arrow} alt = "стрелочка"/>
        </li>
      </ul>
    </div>


  );
}

export default Portfolio;
