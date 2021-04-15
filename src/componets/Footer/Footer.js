import React from 'react';

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
              <a href='https://praktikum.yandex.ru/' className="footer__link" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="foter__list-item">
              <a href='https://github.com/Shigatsi' className="footer__link" className="footer__link">Github</a>
            </li>
            <li className="foter__list-item">
              <a href='https://www.facebook.com/profile.php?id=100013576034548' className="footer__link" className="footer__link">Facebook</a>
            </li>
          </ul>
        </>
      ) :  (
        <>
          <ul className="footer__nav">
            <li className="foter__list-item">
              <a href='https://praktikum.yandex.ru/' className="footer__link" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="foter__list-item">
              <a href='https://github.com/Shigatsi' className="footer__link" className="footer__link">Github</a>
            </li>
            <li className="foter__list-item">
              <a href='https://www.facebook.com/profile.php?id=100013576034548' className="footer__link" >Facebook</a>
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
