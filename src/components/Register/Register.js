import React, { useState, useEffect } from "react";
import "../Register/Register.css"

import { Link, useHistory } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import { useFormValidation } from '../../hooks/useFormValidation';


function Register({ onRegister, loggedIn, isLoadingRegister, regResStatus }) {

  const history = useHistory();
  const [isRegistrationErr, setIsRegistrationErr] = useState(false);
  const [registrationErrMessage, setRegistrationErrMessage] = useState('');

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
  }

  const errorHandler = () => {
    if (regResStatus) {
      switch (regResStatus) {
        case 409:
          setIsRegistrationErr(true);
          setRegistrationErrMessage('Пользователь с таким email уже зарегистрирован');
          break;
        case 400:
          setIsRegistrationErr(true);
          setRegistrationErrMessage('При регистрации пользователя произошла ошибка');
          break;
        case 200:
          setIsRegistrationErr(false);
          setRegistrationErrMessage('Вы успешно зарегистрировались!');
          resetForm();
          break;
        default:
          setIsRegistrationErr(true);
          setRegistrationErrMessage('Пользователь с таким email уже зарегистрирован');
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
  }, [regResStatus]);


  return (
    <main className="register">
      <AuthForm
        onChange={handleChange}
        values={values}
        errors={errors}
        isAuthErr={isRegistrationErr}
        isLoading={isLoadingRegister}
        authErrMessage={registrationErrMessage}
        isValid={isValid}
        onSubmit={handleSubmit}
        titleText={'Добро пожаловать!'}
        requestLink={
          <p className="auth-form__request-text">Уже зарегистрированы? <Link to="/signin" className="auth-form__link">Войти</Link></p>
        }
        buttonTitle="Зарегистрироваться"
      >
        <label className="auth-form__input-label">Имя</label>
        <input className="auth-form__input"
          type="text" name="name" id="register-name"
          onChange={handleChange}
          value={values.name || ''} minLength="2" maxLength="30" pattern='^[a-zA-Zа-яёА-ЯЁ -]+$' required />
        <span id="name-input-error" className={errors.name ? "auth-form__input-error auth-form__input-error_visible" : "auth-form__input-error"}>{errors.name}</span>
      </AuthForm>
    </main>
  );
}

export default Register;
