import React from "react";
import "./AboutProject.css";

import Title from '../Title/Title';


function AboutProject() {
  return (
    <article id="about-project" className="about-project">
      <Title title={'О проекте'}/>
      <section className="about-project__items">
        <div className="about-project__items-container">
          <h3 className="about-project__items-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__items-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <article className="about-project__items-container">
          <h3 className="about-project__items-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__items-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </section>
      <section className="about-project__chart-section">
        <div className="about-project__chart">
          <div className="about-project__chart-item">
            <p className="about-project__chart-text about-project__chart-text_bgcolor_black">1 неделя</p>
            <p className="about-project__chart-subtext">Back-end</p>
          </div>
          <div className="about-project__chart-item">
            <p className="about-project__chart-text">4 недели</p>
            <p className="about-project__chart-subtext">Front-end</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default AboutProject;