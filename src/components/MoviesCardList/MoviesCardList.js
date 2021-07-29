import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ locationPathname, data }) {

  const initialMoviesCards = data.map((item) => (
    <li key={item.id}>
      <MoviesCard
        buttonTitle="Сохранить"
        data={item}
        locationPathname={locationPathname}
      />
    </li>
  ))

  return (
    <ul className="movies-card__list">{initialMoviesCards}</ul>
  )
}

export default MoviesCardList;
