import React from 'react';
import { Link, Route } from 'react-router-dom';

import './Footer.css';

function Footer () {
  function getYear() {
    return new Date().getFullYear();
  };

  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
  })

  return (


    <footer className="footer">
      <p className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      { (width > 425) ? (
        <>
          <p className="footer__copyright">&#169;{getYear()}</p>
          <ul className="footer__nav">
            <li className="foter__list-item">
              <Link to='https://praktikum.yandex.ru/' className="footer__link" className="footer__link">Яндекс.Практикум</Link>
            </li>
            <li className="foter__list-item">
              <Link to='https://github.com/Shigatsi' className="footer__link" className="footer__link">Github</Link>
            </li>
            <li className="foter__list-item">
              <Link to='https://www.facebook.com/profile.php?id=100013576034548' className="footer__link" className="footer__link">Facebook</Link>
            </li>
          </ul>
        </>
      ) :  (
        <>
          <ul className="footer__nav">
            <li className="foter__list-item">
              <Link to='https://praktikum.yandex.ru/' className="footer__link" className="footer__link">Яндекс.Практикум</Link>
            </li>
            <li className="foter__list-item">
              <Link to='https://github.com/Shigatsi' className="footer__link" className="footer__link">Github</Link>
            </li>
            <li className="foter__list-item">
              <Link to='https://www.facebook.com/profile.php?id=100013576034548' className="footer__link" className="footer__link">Facebook</Link>
            </li>
          </ul>
          <p className="footer__copyright">&#169;{getYear()}</p>
        </>
      )
      }
    </footer>
  );
}

export default Footer;
