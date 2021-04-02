import React from 'react';

import './AboutProject.css';

function AboutProject () {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
  }, 1000)

  return (
    <section id="about" className = 'about'>
      <h2 className="section-title">О проекте</h2>

      {
      (width <= 425) ? (
        <>
          <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </>
      ) : (
        <>
        <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
        <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
        <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </>
      )
    }
      <div className = "about__progress">
        <p className="about__progress-bar">1 неделя</p>
        <p className="about__progress-bar">4 недели</p>
        <p className = "about__label">Back-end</p>
        <p className = "about__label">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
