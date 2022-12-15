import React, { useState } from "react";
import "./ProjectsCardList.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { environment } from "../../utils/config";

const ProjectsCardList = ({ isOpen }) => {
  return (
    <ul
      id="portfolio-list-submenu"
      className={`about-me__portfolio-list__submenu ${
        isOpen ? "about-me__portfolio-list__submenu_visible" : ""
      }`}
    >
      {environment.testProjectsProperties.map((property) => (
        <li
          key={property.cardLabel}
          className="about-me__portfolio-list__submenu-item"
        >
          <ProjectsCard project={property}></ProjectsCard>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsCardList;
