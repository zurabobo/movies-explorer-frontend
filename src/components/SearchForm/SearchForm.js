import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <div className="search-form__input-container">
          <input className="search-form__input" type="text" id="search-text" name="search" placeholder="Фильм" minLength="2" maxLength="40" required />
          <button className="search-form__submit-btn" disabled="" type="submit">Найти</button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm;