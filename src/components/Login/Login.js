import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

function Login() {

  return (
    <main className="register">
      <AuthForm
        titleText={'Рады видеть!'}
        requestLink={
          <p className="auth-form__request-text">Ещё не зарегистрированы? <Link to="/sign-up" className="auth-form__link">Регистрация</Link></p>
        }
        buttonTitle="Войти"
      >
        <label className="auth-form__input-label">E-mail</label>
        <input className="auth-form__input"
          type="email" name="email" id="login-email"
          required />
        <span id="name-input-error" className="auth-form__input-error"></span>
        <label className="auth-form__input-label">Пароль</label>
        <input className="auth-form__input"
          type="password" name="password" id="login-password"
          required />
        <span id="aname-input-error" className="auth-form__input-error"></span>
      </AuthForm>
    </main>
  );
}

export default Login;
