import React from 'react';

import './Profile.css';

function Profile() {

  return (
    <section className="profile">
      <form className="profile-form">
        <h1 className="profile-form__title">Привет, Виталий!</h1>
        <fieldset className="profile-form__fieldset">
            <label className="profile-form__input-label">Имя
              <input className="profile-form__input" type="text" name="name" value="Виталий" id="name-input" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="profile-form__input-error" id="name-input-error"></span>
            </label>
            <label className="profile-form__input-label">Email
              <input className="profile-form__input" type="email" name="email" value="pochta@yandex.ru" id="account-email" placeholder="Почта" required />
              <span className="profile-form__input-error" id="name-input-error"></span>
            </label>
        </fieldset>
          <button type="button" disabled className="profile-form__submit-btn">Редактировать</button>
          <button type="button" className="profile-form__submit-btn">Выйти из аккаунта</button>
      </form>
    </section>
  )
}

export default Profile;
