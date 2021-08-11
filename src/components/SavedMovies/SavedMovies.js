import React from 'react';

import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css';

function SavedMovies({ onGetMovies, userMovies, isSavedMovies, movies, onSubmit, onDeleteSavedMovie, onFilter, isShortMovie }) {

  let location = useLocation();

  return (
    <>
      <SearchForm onGetMovies={onGetMovies} />
      <FilterCheckbox onFilter={onFilter} isShortMovie={isShortMovie} />
      {movies.length > 0 ? (
        <MoviesCardList
          onGetMovies={onGetMovies}
          userMovies={userMovies}
          movies={movies}
          isSavedMovies={isSavedMovies}
          onSubmit={onSubmit}
          locationPathname={location.pathname}
          onDeleteSavedMovie={onDeleteSavedMovie} />
      ) : (
        <p className="movies-notification-message">У вас пока нет сохраненных фильмов</p>
      )}
    </>
  )
}

export default SavedMovies;
