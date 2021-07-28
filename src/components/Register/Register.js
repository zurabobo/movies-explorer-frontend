import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "../Register/Register.css"

function Register() {

  return (
    <main className="register">
      <AuthForm
        titleText={'Добро пожаловать!'}
        requestLink={
          <p className="auth-form__request-text">Уже зарегистрированы? <Link to="/sign-in" className="auth-form__link">Войти</Link></p>
        }
        buttonTitle="Зарегистрироваться"
      >
        <label className="auth-form__input-label">Имя</label>
        <input className="auth-form__input"
          type="text" name="name" id="name-input"
          minLength="2" maxLength="40" required />
        <span id="name-input-error" className="auth-form__input-error"></span>
        <label className="auth-form__input-label">E-mail</label>
        <input className="auth-form__input"
          type="email" name="email" id="login-email"
          required />
        <span id="name-input-error" className="auth-form__input-error"></span>
        <label className="auth-form__input-label">Пароль</label>
        <input className="auth-form__input"
          type="password" name="password" id="login-password"
          required />
        <span id="aname-input-error" className="auth-form__input-error">Что-то пошло не так...</span>
      </AuthForm>
    </main>
  );
}

export default Register;
