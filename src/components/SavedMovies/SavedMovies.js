import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import '../Movies/Movies.css';

function SavedMovies({ onChange, userMovies, isSavedMoviesSearch, showSearchedMovies, handleSearchSavedMovies, foundUserMovies, isLoading, isNoMoviesFound, isNoSavedMoviesFound, isSavedMovies, movies, onDeleteSavedMovie, onFilter, isShortMovie }) {

  let location = useLocation();


  useEffect(() => {
    if (!userMovies) {
      handleSearchSavedMovies()
    }
  }, [userMovies]);

  // const handleSubmit = (data) => {
  //   handleSearchSavedMovies(data)
  // }

  // useEffect(() => {
  //   handleSearchSavedMovies()
  // }, [])

  return (
    <>
      <SearchForm showSearchedMovies={showSearchedMovies}
        handleSearchSavedMovies={handleSearchSavedMovies}
        //onSubmit={handleSubmit}
        onChange={onChange}
      />
      <FilterCheckbox onFilter={onFilter} isShortMovie={isShortMovie} />
      {isLoading && (
        <Preloader />
      )}
      {!isLoading && isNoSavedMoviesFound ? (
        <p className="movies-notification-message">ничего не найдено</p>
      ) : (
        <MoviesCardList
          isNoMoviesFound={isNoMoviesFound}
          movies={movies}
          isSavedMovies={isSavedMovies}
          isSavedMoviesSearch={isSavedMoviesSearch}
          foundUserMovies={foundUserMovies}
          locationPathname={location.pathname}
          onDeleteSavedMovie={onDeleteSavedMovie} />
      )}
    </>
  )
}

export default SavedMovies;



