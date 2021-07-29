import React from 'react';
import AboutMePhoto from '../../images/about-me.jpg';
import './AboutMe.css';

import Title from '../Title/Title';

function AboutMe() {

  return (
    <article id="about-me" className="about-me">
      <Title title={'Студент'}/>
      <section className="about-me__section">
        <article className="about-me__info-container">
          <div className="about-me__text-container">
            <h3 className="about-me__info-title">Зураб</h3>
            <h4 className="about-me__subtitle">Мастер, 35 лет</h4>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="about-me__list">
              <li className="about-me__list-item">
                <a className="about-me__list-link" href="https://www.facebook.com/zura.bobokhidze.3" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li className="about-me__list-item">
                <a className="about-me__list-link" href="https://github.com/zurabobo" target="_blank" rel="noreferrer">Github</a>
              </li>
            </ul>
          </div>
            <img className="about-me__image" src={AboutMePhoto} alt="портрет" />
        </article>
      </section>
      <section className="about-me-portfolio__section">
        <div className="about-me__portfolio-list-container">
          <h5 className="about-me__portfolio-title">Портфолио</h5>
          <ul className="about-me__portfolio-list">
            <li className="about-me__portfolio-list-item">
              <a className="about-me__portfolio-list-link" href="https://github.com/zurabobo/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
                <span className="about-me__portfolio-list-link-icon">↗</span>
              </a>
            </li>
            <li className="about-me__portfolio-list-item">
              <a className="about-me__portfolio-list-link" href="https://zurabobo.github.io/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт
                <span className="about-me__portfolio-list-link-icon">↗</span>
              </a></li><li className="about-me__portfolio-list-item">
              <a className="about-me__portfolio-list-link" href="https://zb.students.nomoredomains.club" target="_blank" rel="noreferrer">Одностраничное приложение
                <span className="about-me__portfolio-list-link-icon">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  )
}

export default AboutMe;
