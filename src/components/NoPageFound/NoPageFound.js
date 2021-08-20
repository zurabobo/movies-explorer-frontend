import React from "react";
import { useHistory } from "react-router-dom"
import "./NoPageFound.css";

function NoPageFound() {

  const history = useHistory();

  const handleBackBtnClick = () => {
    history.goBack();
  };

  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
      </div>
      <button onClick={handleBackBtnClick} className="page-not-found__go-back-link">
        Назад
      </button>
    </section>
  );
}

export default NoPageFound;
