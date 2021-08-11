import React from 'react';

import './MoviesCard.css'
import convertTime from '../../utils/convertTime';

function MoviesCard({
  movie,
  isSavedMovies,
  likedMovies,
  onSaveMovie,
  onDeleteSavedMovie,
  buttonTitle,
}) {

  const baseUrl = 'https://api.nomoreparties.co';
  const isLiked = !isSavedMovies && likedMovies(movie)
  const movieLikeBtnClassName = `${isLiked ? "movies-card__save-btn movies-card__saved-btn" : "movies-card__save-btn"}`;

  const handleSaveMovieClick = () => {
    onSaveMovie({
      country: movie.country || 'Нет данных',
      director: movie.director || 'Нет данных',
      duration: movie.duration || 0,
      year: movie.year || 'Нет данных',
      description: movie.description || 'Нет данных',
      image: `${baseUrl}${movie.image ? movie.image.url : ''}`,
      trailer: movie.trailerLink,
      thumbnail: `${baseUrl}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      isSaved: movie.isSaved,
    })
  }

  function handleDeleteClick() {
    onDeleteSavedMovie(movie);
  }

  return (

    <article className="movies-card">
      <a href={movie.trailerLink || movie.trailer} target="_blank" rel="noopener noreferrer nofollow" >
        <img className="movies-card__image" src={isSavedMovies ? movie.image : `${baseUrl}${movie.image ? movie.image.url : movie.image}`}
          alt={movie.nameRU || movie.nameEN} />
      </a>
      {isSavedMovies ? (
        <button className="movies-card__save-btn movies-card__delete-btn" onClick={handleDeleteClick}></button>
      ) : (
        <button className={movieLikeBtnClassName} onClick={handleSaveMovieClick}>{buttonTitle}</button>
      )}
      <div className="movies-card__description">
        <h2 className="movies-card__title">{movie.nameRU || movie.nameEN}</h2>
        <p className="movies-card__duration">{convertTime(movie.duration)}</p>
      </div>
    </article>
  )
}

export default MoviesCard;
