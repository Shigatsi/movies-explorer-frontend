import React from 'react';

import './Techs.css';

function Techs () {
  return (
    <section id="tech" className = "tech">
     <h2 className="section-title section-title__type_tech">Технологии</h2>
     <p className="tech__subtitle">7 технологий</p>
     <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
     <ul className="tech__items">
       <li className="tech__item">HTML</li>
       <li className="tech__item">CSS</li>
       <li className="tech__item">JS</li>
       <li className="tech__item">React</li>
       <li className="tech__item">Git</li>
       <li className="tech__item">Express.js</li>
       <li className="tech__item">mongoDB</li>
     </ul>
    </section >
  );
}

export default Techs;
