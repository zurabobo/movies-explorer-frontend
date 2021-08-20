import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilter, isShortMovie }) {
  return (
    <section className="filter__checkbox-section">
      <div className="filter__checkbox-container">
      <label className="filter__checkbox">
        <input className="filter__checkbox-input" type="checkbox" id="filter-short-movies" name="short-movies" onChange={onFilter} checked={isShortMovie} />
        <span className="filter__checkbox-slider"></span>
        Короткометражки
      </label>
      </div>
    </section>
  )
}

export default FilterCheckbox;
