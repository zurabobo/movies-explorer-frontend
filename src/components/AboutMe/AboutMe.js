import React, { useState } from "react";
import AboutMePhoto from "../../images/about-me.jpg";
import "./AboutMe.css";
import { environment } from "../../utils/config";

import Title from "../Title/Title";
import ProjectsCardList from "../ProjectsCardList/ProjectsCardList";

function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProjectsCardList = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <article id="about-me" className="about-me">
      <Title title={"Студент"} />
      <section className="about-me__section">
        <article className="about-me__info-container">
          <div className="about-me__text-container">
            <h3 className="about-me__info-title">Зураб</h3>
            <h4 className="about-me__subtitle">
              Web-Developer,{" "}
              {new Date().getFullYear() -
                new Date("December 20, 1985").getFullYear()}{" "}
              лет
            </h4>
            <p className="about-me__text">
              Я родился в Тбилиси и уже семь лет живу в Ростове-на-Дону.
              Закончил факультет Информатики и Управления системами. Женат, есть
              сын. Работаю последние несколько лет не по профессии, но так как
              меня всегда увлекало программирование, то решился пройти курс
              "Веб-разработчика" в "Яндекс.Практикуме".
            </p>
            <ul className="about-me__list">
              {environment.socialLinkProperties.map((property, index) => (
                <li key={index} className="about-me__list-item">
                  <a
                    className="about-me__list-link"
                    href={property.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {property.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <img className="about-me__image" src={AboutMePhoto} alt="портрет" />
        </article>
      </section>

      <section className="about-me-portfolio__section">
        <div className="about-me__portfolio-list-container">
          <h5 className="about-me__portfolio-title">Портфолио</h5>
          <ul className="about-me__portfolio-list">
            {environment.portfolioLinkProperties.map((property) => (
              <li
                key={property.label}
                className="about-me__portfolio-list-item"
              >
                <a
                  className="about-me__portfolio-list-link"
                  href={property.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {property.label}
                  <span className="about-me__portfolio-list-link-icon">↗</span>
                </a>
              </li>
            ))}
            <li
              id="portfolio-list"
              className="about-me__portfolio-list-item"
              onClick={toggleProjectsCardList}
            >
              <a className="about-me__portfolio-list-link">
                Тест проекты
                <span className="about-me__portfolio-list-link-icon">↗</span>
              </a>
              <ProjectsCardList isOpen={isOpen}></ProjectsCardList>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}

export default AboutMe;
