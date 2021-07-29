import React from "react";
import { Link } from "react-router-dom";
import "./NoPageFound.css";

function NoPageFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
      </div>
      <Link to="/" className="page-not-found__go-back-link">
        Назад
      </Link>
    </section>
  );
}

export default NoPageFound;
