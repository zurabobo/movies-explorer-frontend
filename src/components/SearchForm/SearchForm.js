import React, { useState , useEffect} from 'react';
import './SearchForm.css';
import '../Movies/Movies.css';

function SearchForm({ onGetMovies }) {

  const [findedMovie, setFindedMovie] = useState("");
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

  function handleSubmit(evt) {
    evt.preventDefault();
    setError("");
    onGetMovies(findedMovie);
    setFindedMovie("");
  }

  useEffect(() => {
    if (findedMovie && !error) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [findedMovie, error]);


  return (
    <>
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <div className="search-form__input-container">
          <input className="search-form__input" type="text" id="search-text" name="search" value={findedMovie} placeholder="Фильм" onChange={handleSearchMovie} required />
          <button className={!isValid ? "search-form__submit-btn search-form__submit-btn_disabled" : "search-form__submit-btn"} disabled={!isValid} onClick={handleSubmit} type="submit">Найти</button>
        </div>
      </div>
    </form>
    <p className="movies-notification-message">{error}</p>
    </>
  )
}

export default SearchForm;

