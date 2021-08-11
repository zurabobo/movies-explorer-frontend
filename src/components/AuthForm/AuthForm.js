import React from 'react';

import { Link } from "react-router-dom";
import "./AuthForm.css";
import Logo from '../../images/header-logo.svg';
import FormTitle from '../FormTitle/FormTitle';
import Preloader from '../Preloader/Preloader';


function AuthForm({ isValid, isLoading, isAuthErr, authErrMessage, onSubmit, titleText, children, requestLink, buttonTitle }) {

  if (isLoading) {
    return (
      <div className="preloader-container">
      <Preloader />
      </div>
    )
  } else {
  return (
    <section className="auth-form__section">
      <form className="auth-form" onSubmit={onSubmit} noValidate>
        <Link to="/">
          <img alt="логотип movies-explorer" className="logo" src={Logo} />
        </Link>
        <FormTitle titleText={titleText} />
        <fieldset className="auth-form__fieldset" disabled={isLoading}>
          {children}
        </fieldset>
        {isAuthErr && (
        <span className="auth-form__error-message">{authErrMessage}</span>
        )}
        <button className={!isValid ? "auth-form__submit-btn auth-form__submit-btn_disabled" : "auth-form__submit-btn"}
          type="submit" disabled={!isValid}>
          {buttonTitle}
        </button>
        {requestLink}
      </form>
    </section>
  );
        }
}

export default AuthForm;

