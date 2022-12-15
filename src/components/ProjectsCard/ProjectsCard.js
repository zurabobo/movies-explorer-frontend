import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ project }) => {
  return (
    <>
      <article className="portfolio-card">
        <a
          className="about-me__portfolio-list__submenu-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <p className="about-me__portfolio-list__submenu-link-label">
            {project.cardLabel}
          </p>
          <div
            className="about-me__portfolio-list__submenu-item__preview"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="submenu-item__preview-info__header-container">
              <p className="submenu-item__preview-info__text-script">
                <span
                  style={{
                    backgroundColor: `${project.bgColor}`,
                  }}
                  className="submenu-item__preview-info__text-script__circle"
                ></span>
                {project.script}
              </p>

              <p className="submenu-item__preview-info__text">
                {project.frontend}
              </p>
              <p className="submenu-item__preview-info__text">
                {project.backend}
              </p>
              <p className="submenu-item__preview-info__text">
                {project.database}
              </p>
              <p className="submenu-item__preview-info__text">
                {project.bundler}
              </p>
              <p className="submenu-item__preview-info__text">
                {project.deadline}
              </p>
            </div>
            <div className="submenu-item__preview-info__footer-container">
              <p className="submenu-item__preview-info__text-task">
                {project.task}
              </p>
              <p className="submenu-item__preview-info__text-demo">
                {project.website}
              </p>
            </div>
          </div>
        </a>
      </article>
    </>
  );
};

export default ProjectsCard;
