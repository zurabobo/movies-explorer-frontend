import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import useMediaScreenSize from '../../hooks/useMediaScreenSize';


function MoviesCardList({ savedMovies, likedMovies, onSaveMovie, isSavedMovies, userMovies, onDeleteSavedMovie, locationPathname, movies }) {

  const SCREEN_WIDTH_L = 1280;
  const SCREEN_WIDTH_M = 768;
  const SCREEN_WIDTH_S = 320;

  const QUANTITY_MOVIES_TO_RENDER_L = 12;
  const QUANTITY_MOVIES_TO_RENDER_M = 8;
  const QUANTITY_MOVIES_TO_RENDER_S = 5;

  const QUANTITY_MOVIES_TO_ADD_L = 3;
  const QUANTITY_MOVIES_TO_ADD_M = 2;

  const QUANTIITY = 0;

  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isMoreButtonActive, setIsMoreButtonActive] = useState(false);
  const [quantityMoviesToRender, setQuantityMoviesToRender] = useState(0);
  const [quantityMoviesToAdd, setQuantityMoviesToAdd] = useState(0);

  const screenSize = useMediaScreenSize();

  const countQuantityMoviesToRender = () => {
    if (screenSize.width >= SCREEN_WIDTH_L) {
      setQuantityMoviesToRender(QUANTITY_MOVIES_TO_RENDER_L);
      setQuantityMoviesToAdd(QUANTITY_MOVIES_TO_ADD_L);
    } else if (screenSize.width < SCREEN_WIDTH_L && screenSize.width >= SCREEN_WIDTH_M) {
      setQuantityMoviesToRender(QUANTITY_MOVIES_TO_RENDER_M);
      setQuantityMoviesToAdd(QUANTITY_MOVIES_TO_ADD_M);
    } else if (screenSize.width < SCREEN_WIDTH_M && screenSize.width >= SCREEN_WIDTH_S) {
      setQuantityMoviesToRender(QUANTITY_MOVIES_TO_RENDER_S);
      setQuantityMoviesToAdd(QUANTITY_MOVIES_TO_ADD_M);
    };
  };

  const handleMoreButtonClick = () => {
    setMoviesToRender(movies.slice(QUANTIITY, moviesToRender.length + quantityMoviesToAdd));
    if (moviesToRender.length >= movies.length - quantityMoviesToAdd) {
      setIsMoreButtonActive(false);
    }
  }

  useEffect(() => {
    countQuantityMoviesToRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize.width])

  useEffect(() => {
    if (locationPathname === '/movies') {
      setMoviesToRender(movies.slice(QUANTIITY, quantityMoviesToRender));
      if (movies.length <= quantityMoviesToRender) {
        setIsMoreButtonActive(false);
      } else {
        setIsMoreButtonActive(true);
      };
    } else if (locationPathname === '/saved-movies') {
      setMoviesToRender(movies);
      setIsMoreButtonActive(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, quantityMoviesToRender])



  const initialMoviesCards = moviesToRender.map((movie, id) => (
    <li key={id}>
      <MoviesCard
        buttonTitle="Сохранить"
        movie={movie}
        onSaveMovie={onSaveMovie}
        likedMovies={likedMovies}
        isSavedMovies={isSavedMovies}
        savedMovies={savedMovies}
        locationPathname={locationPathname}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </li>
  ))

  return (
    <>
    <ul className="movies-card__list">{initialMoviesCards}</ul>
    {locationPathname === '/movies' && isMoreButtonActive ? (
      <MoreButton
        onClick={handleMoreButtonClick}
      />
    ) : null}
    </>
  )
}

export default MoviesCardList;
