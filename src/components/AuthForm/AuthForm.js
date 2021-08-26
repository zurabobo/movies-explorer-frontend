import React, { useState } from 'react';

import { Link } from "react-router-dom";
import "./AuthForm.css";
import "../Header/Header.css"
import Logo from '../../images/header-logo.svg';
import FormTitle from '../FormTitle/FormTitle';
import Preloader from '../Preloader/Preloader';


function AuthForm({ onChange, values, errors, isValid, isLoading, isAuthErr, authErrMessage, onSubmit, titleText, children, requestLink, buttonTitle }) {

  const [inputType, setInputType] = useState('password');

  function handleShowPassword() {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  }

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
          <img alt="логотип movies-explorer" className="header__logo" src={Logo} />
        </Link>
        <FormTitle titleText={titleText} />

        <fieldset className="auth-form__fieldset" disabled={isLoading}>
          {children}

          <label className="auth-form__input-label">E-mail</label>
        <input className="auth-form__input"
          type="email" name="email" value={values.email || ''} onChange={onChange} id="login-email"
          minLength="2" maxLength="30" pattern='.{2,}@.{2,}\.[a-zA-Z]{2,6}' required />
        <span id="login-email-error" className={errors.email ? "auth-form__input-error auth-form__input-error_visible" : "auth-form__input-error"}>{errors.email}</span>

          <label className="auth-form__input-label">Пароль</label>
        <div className="auth-form__password-input-container">
          <input className="auth-form__input"
            type={inputType} name="password" onChange={onChange} id="password"
            value={values.password || ''} minLength="8" maxLength="30" required />
          <button
            type='button'
            className={`auth-form__password-icon auth-form__password-icon_${inputType}`}
            onClick={handleShowPassword}
            onKeyDown={(evt) => evt.preventDefault}></button>
        </div>
        <span id="register-password-error" className={errors.password ? "auth-form__input-error auth-form__input-error_visible" : "auth-form__input-error"}>{errors.password}</span>

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

