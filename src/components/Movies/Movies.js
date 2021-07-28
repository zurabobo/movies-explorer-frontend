import { React, useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoreButton from '../MoreButton/MoreButton';


function Movies() {

  let location = useLocation();

  const [isLoadingData, setIsLoadingData] = useState(true);

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
    {
      id: 4,
      isSaved: true,
    },
    {
      id: 5,
      isSaved: false,
    },
    {
      id: 6,
      isSaved: true,
    },
    {
      id: 7,
      isSaved: true,
    },
    {
      id: 8,
      isSaved: false,
    },
  ];

  useEffect(() => {
    const loadingDataTimeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1500);

    return () => {
      clearTimeout(loadingDataTimeout);
    };
  }, [])

  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      {isLoadingData ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList data={MOVIES_CARD_LIST_DATA} locationPathname={location.pathname} />
          <MoreButton buttonTitle="Ещё" />
        </>
      )}
    </>
  )
}

export default Movies;
