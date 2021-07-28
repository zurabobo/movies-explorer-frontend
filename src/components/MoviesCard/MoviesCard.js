import { React, useState } from 'react';

import './MoviesCard.css'
import CardImage from '../../images/card.png'

function MoviesCard({ data, locationPathname, buttonTitle }) {

  const [isSaved, setIsSaved] = useState(data.isSaved);

  const DeleteSavedMovieIconClassName = `${locationPathname === '/saved-movies' ? (
    "movies-card__save-btn movies-card__delete-btn"
  )
  :
  locationPathname === '/movies' && isSaved ? (
    "movies-card__save-btn movies-card__saved-btn"
  ) : (
    "movies-card__save-btn"
  )}`

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (

    <article id={data.id} className="movies-card">
      <img className="movies-card__image" src={CardImage} alt="постер" />
      <button className={DeleteSavedMovieIconClassName} onClick={handleSaveClick}>{buttonTitle}</button>
        <div className="movies-card__description">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
    </article>
  )
}

export default MoviesCard;
