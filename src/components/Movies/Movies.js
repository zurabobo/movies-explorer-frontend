import React from 'react';

import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Movies.css';


function Movies({ savedMovies, onChange, onGetMovies, likedMovies, isShortMovie, onSubmit, onFilter, isLoading, isNoMoviesFound, movies, onSaveMovie }) {

  let location = useLocation();

  return (
    <>
      <SearchForm locationPathname={location.pathname} onGetMovies={onGetMovies} onSubmit={onSubmit} onChange={onChange} />

      <FilterCheckbox onFilter={onFilter} isShortMovie={isShortMovie} />

      {isLoading && (
        <Preloader />
      )}
      {!isLoading && isNoMoviesFound ? (
        <p className="movies-notification-message">по вашему запросу ничего не найдено</p>
      ) : (
        <MoviesCardList
          isSavedMovies={false}
          likedMovies={likedMovies}
          isNoMoviesFound={isNoMoviesFound}
          movies={movies}
          locationPathname={location.pathname}
          savedMovies={savedMovies}
          onSaveMovie={onSaveMovie}
        />
      )}
    </>
  )
}

export default Movies;

