import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import '../Movies/Movies.css';

function SearchForm({ onGetMovies, locationPathname, handleSearchSavedMovies, showSearchedMovies }) {

  const [findedMovie, setFindedMovie] = useState([]);
  const [findedSavedMovie, setFindedSavedMovie] = useState([]);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleSearchMovie(evt) {
    setFindedMovie(evt.target.value);
    if (evt.target.value.length === 0) {
      setError("Нужно ввести ключевое слово");
    } else {
      setError("");
    }
  }

  function handleSearchSavedMovieChange(evt) {
    setFindedSavedMovie(evt.target.value);
    if (evt.target.value.length === 0) {
      setError("Нужно ввести ключевое слово");
    } else {
      setError("");
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setError("");
    onGetMovies(findedMovie);
    setFindedMovie("");
  }

  function handleSavedMoviesSubmit(evt) {
    evt.preventDefault();
    setError("");
    handleSearchSavedMovies(findedSavedMovie);
    setFindedSavedMovie("")
    showSearchedMovies();
  }

  useEffect(() => {
    if (findedMovie && findedSavedMovie && !error) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [findedMovie, findedSavedMovie, error]);

  return (
    <>
      {locationPathname === '/movies' ? (
        <>
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__container">
              <div className="search-form__input-container">
                <input className="search-form__input" placeholder="Фильм" type="text" id="search-text" name="search" value={findedMovie} onChange={handleSearchMovie} required />
                <button className="search-form__submit-btn" type="submit">Найти</button>
              </div>
            </div>
          </form>
          <p className="movies-notification-message">{error}</p>
        </>
      ) : (

            <>
              <form className="search-form" onSubmit={handleSavedMoviesSubmit}>
                <div className="search-form__container">
                  <div className="search-form__input-container">
                    <input className="search-form__input" placeholder="Фильм" type="text" id="search-text" name="search" value={findedSavedMovie} onChange={handleSearchSavedMovieChange} required />
                    <button className="search-form__submit-btn" type="submit">Найти</button>
                  </div>
                </div>
              </form>
              <p className="movies-notification-message">{error}</p>
            </>

      )
      }
    </>
  )
}

export default SearchForm;

