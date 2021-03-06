import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  return (
    <div className = 'not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className = "not-found__subtitle">Страница не найдена</p>
      <Link exact to = "/" className = "not-found__link">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
