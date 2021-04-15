import React from 'react';

import './AboutMe.css'

import Portfolio from '../Portfolio/Portfolio'
import Photo from '../../images/photo.jpg';



function AboutMe () {
  return (
    <section id="student" className = 'about-me'>
      <h2 className="section-title">Студентка</h2>
      <div className="about-me__text-container">
        <p className="about-me__subtitle">Евгения</p>
        <p className="about-me__text-me">Веб-разработчица, 30 лет.</p>
        <p className = "about-me__text">Я родилась в Архангельске, живу в Санкт-Петербурге. Окончила океанологический факультет РГГМУ. У меня есть рыжий кот. Я люблю кататься на велосипеде и читать книги. Уже год постигаю веб-разработку. С 2015 года работаю в Лаборатории спутниковой океанографии. В процессе прохождения курса по веб-разработке, начала выполнять задачи связанные с веб-разработкой в Лаборатории.</p>
        <ul className ="about-me__links">
        <li className="about-me__item">
          <a href ="https://www.facebook.com/profile.php?id=100013576034548" className="about-me__link" target= "blank" rel = "noreferrer">Facebook</a>
        </li>
        <li className="about-me__item">
          <a href ="https://github.com/Shigatsi" className="about-me__link" target= "blank" rel = "noreferrer">Github</a>
        </li>
      </ul>
      </div>
      <img className="about-me__photo" src={Photo} alt="Моё фото в красивой рубашечке и бабочке"></img>

      <Portfolio />
    </section>


  );
}

export default AboutMe;
