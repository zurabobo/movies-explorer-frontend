import React from 'react';

import { Link } from "react-router-dom";
import "./AuthForm.css";
import Logo from '../../images/header-logo.svg';
import FormTitle from '../FormTitle/FormTitle';


function AuthForm({ titleText, children, requestLink, buttonTitle }) {
  return (
    <section className="auth-form__section">
      <form className="auth-form">
        <Link to="/">
          <img alt="логотип movies-explorer" className="logo" src={Logo} />
        </Link>
          <FormTitle titleText={titleText} />
          <fieldset className="auth-form__fieldset">
            {children}
          </fieldset>
          <button className="auth-form__submit-btn" type="submit" disabled>{buttonTitle}</button>
          {requestLink}
      </form>
    </section>
  );
}

export default AuthForm;
