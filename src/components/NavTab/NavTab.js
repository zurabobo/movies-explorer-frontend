import React from "react";
import "./NavTab.css";
import { environment } from "../../utils/config";

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        {environment.navTabProperties.map((property) => (
          <li key={property.label} className="nav-tab__list-item">
            <a className="nav-tab__list-link" href={property.anchor}>
              {property.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavTab;
