import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <section className="filter__checkbox-section">
      <div className="filter__checkbox-container">
      <label className="filter__checkbox">
        <input className="filter__checkbox-input" type="checkbox" id="filter-short-movies" name="short-movies" value="" />
        <span className="filter__checkbox-slider"></span>
        Короткометражки
      </label>
      </div>
    </section>
  )
}

export default FilterCheckbox;