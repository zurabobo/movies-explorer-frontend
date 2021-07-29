import React from "react";
import "./Techs.css";

import Title from '../Title/Title';


function Techs() {
  return (
    <article id="technologies" className="techs">
        <Title title={'Технологии'}/>
      <section className="techs-items__section">
        <article className="techs-items">
            <h3 className="techs-items__title">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </article>
      </section>
      <section className="techs-icon__section">
        <ul className="techs-list">
          <li className="techs-list__item">HTML</li>
          <li className="techs-list__item">CSS</li>
          <li className="techs-list__item">JS</li>
          <li className="techs-list__item">React</li>
          <li className="techs-list__item">Git</li>
          <li className="techs-list__item">Express.js</li>
          <li className="techs-list__item">mongoDB</li>
        </ul>
      </section>
    </article>
  )
}

export default Techs;