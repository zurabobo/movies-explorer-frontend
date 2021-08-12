import React, { useContext, useState, useEffect } from 'react';

import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import Preloader from '../Preloader/Preloader';


function Profile({ onSignOut, isLoading, onUpdateUser, userResStatus }) {
  const currentUser = useContext(CurrentUserContext);
  const [isUpdateUserError, setIsUpdateUserError] = useState(false);
  const [updateUserErrorMessage, setUpdateUserErrorMessage] = useState('')
  const [formIsValid, setFormIsValid] = useState(false);
  const [isEdited, setIsEdited] = React.useState(false);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(values);
    disableEditProfile();
    resetForm(currentUser);
  }

  const disableEditProfile = () => {
    setIsEdited(!isEdited);
    setIsUpdateUserError(false);
    setUpdateUserErrorMessage('');
  };

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
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    setFormIsValid(isValid);
  }, [isValid, values]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setFormIsValid(false);
    }
  }, [currentUser, values])

  // useEffect(() => {
  //   errorHandler();
  // });

  return (
    <section className="profile">
      <form className="profile-form" onSubmit={handleSubmit} noValidate>
        <h1 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h1>

        <fieldset className="profile-form__fieldset">
          <label className="profile-form__input-label">Имя
            <input className="profile-form__input" type="text" name="name" value={values.name || ''} onChange={handleChange} id="name-input" minLength="2" maxLength="30" pattern='^[a-zA-Zа-яёА-ЯЁ -]+$' required />
          </label>
          <span id="name-input-error" className={errors.name ? "profile-form__input-error profile-form__input-error_visible" : "profile-form__input-error"}>{errors.name}</span>

          <label className="profile-form__input-label">Email
            <input className="profile-form__input" type="email" name="email" value={values.email || ''} onChange={handleChange} id="account-email" required />
          </label>
          <span id="email-input-error" className={errors.email ? "profile-form__input-error profile-form__input-error_visible" : "profile-form__input-error"}>{errors.email}</span>
          {isUpdateUserError && (
            <span className="profile-form__error-message">{updateUserErrorMessage}</span>
          )}
        </fieldset>
          <>
            {isLoading && (
              <Preloader />
            )}
            <button type="submit" disabled={!formIsValid} onClick={onUpdateUser} className={!formIsValid ? "profile-form__edit-btn profile-form__edit-btn_disabled" : "profile-form__edit-btn"}>Редактировать</button>
            <button type="submit" onClick={onSignOut} className="profile-form__signout-btn">Выйти из аккаунта</button>
            </>
      </form>
    </section>
  )
}


export default Profile;

