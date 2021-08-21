import React, { useState, useEffect } from "react";
import './Login.css';

import { Link, useHistory } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import { useFormValidation } from '../../hooks/useFormValidation';


function Login({ onLogin, loggedIn, isLoadingLogin, authResStatus, tokenResStatus }) {

  const history = useHistory();
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

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [history, loggedIn]);

  useEffect(() => {
    errorHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authResStatus, tokenResStatus]);

  return (
    <main className="login">
      <AuthForm
        onChange={handleChange}
        values={values}
        errors={errors}
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
      </AuthForm>
    </main>
  );
}

export default Login;
