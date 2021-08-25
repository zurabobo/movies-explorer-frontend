import React from "react";
import "./Techs.css";

import Title from '../Title/Title';


function Techs() {
  return (
    <article id="technologies" className="techs">
      <Title title={'Технологии'} />
      <section className="techs-items__section">
        <article className="techs-items">
          <h3 className="techs-items__title">7 технологий</h3>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </article>
      </section>
      <section className="techs-icon__section">
        <ul className="techs-list">
          <li className="techs-list__item">
            <a className="techs-list__link" href="https://html.com/" target="_blank" rel="noopener noreferrer">HTML</a>
          </li>
          <li className="techs-list__item">
            <a className="techs-list__link" href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">CSS</a>
          </li>
          <li className="techs-list__item">
            <a className="techs-list__link" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">JS</a>
          </li>
          <li className="techs-list__item">
          <a className="techs-list__link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
          </li>
        <li className="techs-list__item">
          <a className="techs-list__link" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>
        </li>
        <li className="techs-list__item">
          <a className="techs-list__link" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express.js</a>
        </li>
        <li className="techs-list__item">
          <a className="techs-list__link" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">mongoDB</a>
        </li>
        </ul>
      </section>
    </article >
  )
}

export default Techs;
