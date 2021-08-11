import React from 'react';

import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Movies.css';


function Movies({ savedMovies, onGetMovies, likedMovies, isShortMovie, userMovies, onSubmit, onFilter, isLoading, isNoMoviesFound, movies, onSaveMovie, onDeleteSavedMovie }) {

  let location = useLocation();

  return (
    <>
      <SearchForm onGetMovies={onGetMovies} />
      {!isLoading && isNoMoviesFound && (
        <p className="movies-notification-message">по вашему запросу ничего не найдено</p>
      )}

      <FilterCheckbox onFilter={onFilter} isShortMovie={isShortMovie}/>

      {isLoading && (
        <Preloader />
      )}
      <MoviesCardList
        onGetMovies={onGetMovies}
        isSavedMovies={false}
        likedMovies={likedMovies}
        movies={movies}
        onSubmit={onSubmit}
        locationPathname={location.pathname}
        savedMovies={savedMovies}
        userMovies={userMovies}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie} />
    </>
  )
}

export default Movies;

