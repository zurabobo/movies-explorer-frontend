import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import useMediaScreenSize from '../../hooks/useMediaScreenSize';
import {
  SCREEN_WIDTH_L,
  SCREEN_WIDTH_M,
  SCREEN_WIDTH_S,
  QUANTIITY,
  QUANTITY_MOVIES_TO_ADD_L,
  QUANTITY_MOVIES_TO_ADD_M,
  QUANTITY_MOVIES_TO_RENDER_L,
  QUANTITY_MOVIES_TO_RENDER_M,
  QUANTITY_MOVIES_TO_RENDER_S,
} from '../../utils/config';


function MoviesCardList({ foundUserMovies, isSavedMoviesSearch, savedMovies, likedMovies, onSaveMovie, isSavedMovies, onDeleteSavedMovie, locationPathname, movies }) {

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



  const initialMoviesCards = moviesToRender.map((movie) => (
    <li key={movie.id || movie._id}>
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
      <section className="movies-card-list__section">
        {isSavedMovies ? (
          <>
            {isSavedMoviesSearch ? (
              <>
                <ul className="movies-card__list">
                  {foundUserMovies.map((movie) => (
                    <li key={movie.id || movie._id}>
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
                  ))}
                </ul>
              </>
            ) : (
              <>
                <ul className="movies-card__list">{initialMoviesCards}</ul>
              </>
            )}
          </>
        ) : (
          <>
            <ul className="movies-card__list">{initialMoviesCards}</ul>
            {isMoreButtonActive ? (
              <MoreButton onClick={handleMoreButtonClick} />
            ) : null}
          </>
        )}
      </section>
    </>
  )
}

export default MoviesCardList;

