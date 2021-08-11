import React, { useContext, useState, useEffect } from 'react';

import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import Preloader from '../Preloader/Preloader';


function Profile({ onSignOut, isLoading, buttonTitle, onUpdateUser, userResStatus }) {
  const currentUser = useContext(CurrentUserContext);
  const [isUpdateUserError, setIsUpdateUserError] = useState(false);
  const [updateUserErrorMessage, setUpdateUserErrorMessage] = useState('')
  const [isEdited, setIsEdited] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormValidation({});

  useEffect(() => {
    setFormIsValid(isValid);
  }, [isValid, values])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(values);
    disableEditProfile();

  }

  const errorHandler = () => {
    if (userResStatus) {
      switch (userResStatus) {
        case 400:
        case 404:
          setIsUpdateUserError(true);
          setUpdateUserErrorMessage('При обновлении профиля произошла ошибка');
          break;
        case 500:
          setIsUpdateUserError(true);
          setUpdateUserErrorMessage('На сервере произошла ошибка')
          break;
        case 200:
          setIsUpdateUserError(false);
          setUpdateUserErrorMessage('');
          break;
        default:
          setIsUpdateUserError(true);
          setUpdateUserErrorMessage('При обновлении профиля произошла ошибка');
          break;
      };
    };
  };

  useEffect(() => {
    errorHandler();
  });

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm])

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [currentUser, values])

  const disableEditProfile = () => {
    setIsEdited(!isEdited);
    setIsUpdateUserError(false);
    setUpdateUserErrorMessage('');
  };

  return (
    <section className="profile">
      <form className="profile-form" onSubmit={handleSubmit} noValidate>
        <h1 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h1>

        <fieldset className="profile-form__fieldset" disabled={!isEdited || isLoading}>
          <label className="profile-form__input-label">Имя
            <input className="profile-form__input" type="text" name="name" value={values.name || ''} onChange={handleChange} id="name-input" minLength="2" maxLength="30" required />
          </label>
          <span id="name-input-error" className={errors.name ? "profile-form__input-error profile-form__input-error_visible" : "profile-form__input-error"}>{errors.name}</span>

          <label className="profile-form__input-label">Email
            <input className="profile-form__input" type="email" name="email" disabled value={values.email || ''} onChange={handleChange} id="account-email" required />
          </label>
          <span id="email-input-error" className={errors.email ? "profile-form__input-error profile-form__input-error_visible" : "profile-form__input-error"}>{errors.email}</span>
          {isUpdateUserError && (
            <span className="profile-form__error-message">{updateUserErrorMessage}</span>
          )}
        </fieldset>

        {isEdited ? (
          <button
            type="submit"
            onClick={onUpdateUser}
            disabled={!formIsValid}
            className={!formIsValid ? "profile-form__submit-btn profile-form__submit-btn_disabled" : "profile-form__submit-btn"}>
            {buttonTitle}
          </button>
        ) : (
          <>
            {isLoading && (
              <Preloader />
            )}
            <button type="button" onClick={disableEditProfile} className="profile-form__edit-btn">Редактировать</button>
            <button type="button" onClick={onSignOut} className="profile-form__signout-btn">Выйти из аккаунта</button>
          </>
        )}
      </form>
    </section>
  )
}


export default Profile;
