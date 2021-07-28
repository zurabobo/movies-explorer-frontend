import React from 'react';

import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function SavedMovies() {

  let location = useLocation();

  const MOVIES_CARD_LIST_DATA = [
    {
      id: 1,
      isSaved: false,
    },
    {
      id: 2,
      isSaved: false,
    },
    {
      id: 3,
      isSaved: false,
    },
  ];

  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList data={MOVIES_CARD_LIST_DATA} locationPathname={location.pathname} />
      <MoreButton buttonTitle="Ещё" />
    </>
  )
}

export default SavedMovies;
