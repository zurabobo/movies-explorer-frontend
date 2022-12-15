import React from "react";
import "./Techs.css";
import { environment } from "../../utils/config";

import Title from "../Title/Title";

function Techs() {
  return (
    <article id="technologies" className="techs">
      <Title title={"Технологии"} />
      <section className="techs-items__section">
        <article className="techs-items">
          <h3 className="techs-items__title">7 технологий</h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </article>
      </section>
      <section className="techs-icon__section">
        <ul className="techs-list">
          {environment.teachListProperties.map((property) => (
            <li key={property.label} className="techs-list__item">
              <a
                className="techs-list__link"
                href={property.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {property.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Techs;
