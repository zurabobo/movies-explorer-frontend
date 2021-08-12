import React, { useState } from "react";
import './Login.css';

import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import { useFormValidation } from '../../hooks/useFormValidation';


function Login({ onLogin, isLoadingLogin, authResStatus, tokenResStatus }) {

  const [isAuthErr, setIsAuthErr] = useState(false);
  const [authErrMessage, setAuthErrMessage] = useState('');

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
  }

  const errorHandler = () => {
    if (tokenResStatus) {
      switch (tokenResStatus) {
        case 400:
          setIsAuthErr(true);
          setAuthErrMessage('При авторизации произошла ошибка');
          break;
        case 401:
          setIsAuthErr(true);
          setAuthErrMessage('При авторизации произошла ошибка. Переданный токен некорректен')
          break;
        case 500:
          setIsAuthErr(true);
          setAuthErrMessage('На сервере произошла ошибка');
          break;
        case 200:
          setIsAuthErr(false);
          setAuthErrMessage('');
          resetForm();
          break;
        default:
          setIsAuthErr(true);
          setAuthErrMessage('При авторизации произошла ошибка');
          break;
      };
    }

    if (authResStatus) {
      switch (authResStatus) {
        case 400:
        case 401:
          setIsAuthErr(true);
          setAuthErrMessage('Неправильный логин или пароль');
          break;
        case 500:
          setIsAuthErr(true);
          setAuthErrMessage('На сервере произошла ошибка');
          break;
        case 200:
          setIsAuthErr(false);
          setAuthErrMessage('');
          resetForm();
          break;
        default:
          setIsAuthErr(true);
          setAuthErrMessage('Неправильный логин или пароль');
          break;
      };
    };
  };

  React.useEffect(() => {
    errorHandler();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authResStatus, tokenResStatus]);

  return (
    <main className="login">
      <AuthForm
        isAuthErr={isAuthErr}
        isLoading={isLoadingLogin}
        authErrMessage={authErrMessage}
        isValid={isValid}
        onSubmit={handleSubmit}
        titleText={'Рады видеть!'}
        requestLink={
          <p className="auth-form__request-text">Ещё не зарегистрированы? <Link to="/signup" className="auth-form__link">Регистрация</Link></p>
        }
        buttonTitle="Войти"
      >

        <label className="auth-form__input-label">E-mail</label>
        <input className="auth-form__input"
          type="email" name="email" value={values.email || ''} onChange={handleChange} id="login-email"
          minLength="2" maxLength="30" pattern='.{2,}@.{2,}\.[a-zA-Z]{2,6}' required />
        <span id="login-email-error" className={errors.email ? "auth-form__input-error auth-form__input-error_visible" : "auth-form__input-error"}>{errors.email}</span>

        <label className="auth-form__input-label">Пароль</label>
        <input className="auth-form__input"
          type="password" name="password" onChange={handleChange} id="login-password"
          value={values.password || ''} minLength="8" maxLength="30" required />
        <span id="login-password-error" className={errors.email ? "auth-form__input-error auth-form__input-error_visible" : "auth-form__input-error"}>{errors.password}</span>
      </AuthForm>
    </main>
  );
}

export default Login;
