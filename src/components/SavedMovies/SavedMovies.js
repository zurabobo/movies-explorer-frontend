import React from 'react';

import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css';

function SavedMovies({ isLoading, isNoSavedMoviesFound, onGetMovies, userMovies, isSavedMovies, movies, onSubmit, onDeleteSavedMovie, onFilter, isShortMovie }) {

  let location = useLocation();

  return (
    <>
      <SearchForm onGetMovies={onGetMovies} />
      {!isLoading && isNoSavedMoviesFound && (
        <p className="movies-notification-message">по вашему запросу ничего не найдено</p>
      )}
      <FilterCheckbox onFilter={onFilter} isShortMovie={isShortMovie} />
      <MoviesCardList
        onGetMovies={onGetMovies}
        userMovies={userMovies}
        movies={movies}
        isSavedMovies={isSavedMovies}
        onSubmit={onSubmit}
        locationPathname={location.pathname}
        onDeleteSavedMovie={onDeleteSavedMovie} />
    </>
  )
}

export default SavedMovies;
