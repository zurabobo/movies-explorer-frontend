import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import './App.css';


import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header'
import MenuPopup from '../MenuPopup/MenuPopup';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import NoPageFound from '../NoPageFound/NoPageFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {

  const [loggedIn, setLoggedIn] = useState((localStorage.getItem("loggedIn")) || false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);
  const [isLoadingUpdateUser, setIsLoadingUpdateUser] = useState(false);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  const [isNoMoviesFound, setIsNoMoviesFound] = useState(false);
  const [isNoSavedMoviesFound, setIsNoSavedMoviesFound] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUpdateMessage, setProfileUpdateMessage] = useState('');
  const [userMovies, setUserMovies] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [sortedMovies, setSortedMovies] = useState([])
  const [authResStatus, setAuthResStatus] = useState(null);
  const [registrationResStatus, setRegistrationResStatus] = useState(null);
  const [tokenAuthResStatus, setTokenAuthResStatus] = useState(null);
  const [updateUserResStatus, setUpdateUserResStatus] = useState(null);
  const [movies, setMovies] = useState([])
  const [shortMovies, setShortMovies] = useState(false);
  const [isSavedMoviesSearch, setIsSavedMoviesSearch] = useState(false);
  const [findedUserMovies, setFindedUserMovies] = useState([]);

  const history = useHistory();

  const checkToken = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setTokenAuthResStatus(res.status);
          setCurrentUser(res);
        })
        .catch((err) => {
          setTokenAuthResStatus(err)
        })
    }
  }

  const handleRegister = (data) => {
    setIsLoadingRegister(true)
    mainApi.register(data)
      .then((res) => {
        setRegistrationResStatus(res.status);
        handleSignin({
          email: data.email,
          password: data.password
        });
      })
      .catch((err) => {
        setRegistrationResStatus(err);
      })
      .finally(() => {
        setIsLoadingRegister(false);
      })
  };

  const handleSignin = (data) => {
    setIsLoadingLogin(true)
    mainApi.authorize(data)
      .then((res) => {
        setAuthResStatus(res.status);
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('loggedIn', true);
        setLoggedIn(true);
        history.push('/movies');
      })
      .then(() => {
        checkToken();
      })
      .catch((err) => {
        setAuthResStatus(err);
      })
      .finally(() => {
        setIsLoadingLogin(false);
      })
  };

  const handleSignOut = (evt) => {
    evt.preventDefault();
    localStorage.clear();
    setLoggedIn(false);
    setUserMovies([]);
    setSortedMovies([]);
    setCurrentUser({});
    history.push('/');
  };

  const handleUpdateUser = (data) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoadingUpdateUser(true)
      mainApi.updateUserProfile(data, token)
        .then((res) => {
          setCurrentUser(res);
          setProfileUpdateMessage('Данные успешно обновлены')
          setUpdateUserResStatus(res.status);
          localStorage.setItem('currentUser', JSON.stringify(res));
        })
        .catch((err) => {
          setUpdateUserResStatus(err);
        })
        .finally(() => {
          setIsLoadingUpdateUser(false);
        })
    };
  }


  const handleSearchMovies = (keyword) => {
    const key = new RegExp(keyword, "gi");
    const findedMovies = movies.filter((m) => key.test(m.nameRU) || key.test(m.nameEN));
    if (findedMovies.length === 0) {
      setIsNoMoviesFound(true);
    } else {
      setIsNoMoviesFound(false);
      const markAsSaved = findedMovies.map((movie) => {
        movie.isSaved = userMovies.some(
          (userMovie) => userMovie.movieId === movie.id
        );
        return movie;
      });
      setSortedMovies(markAsSaved);
      localStorage.setItem("sortedMovies", JSON.stringify(markAsSaved));
    }
  }

  const handleToggleSave = (movie) => {
    const clickedMovie = movie.isSaved;
    if (clickedMovie) {
      handleDeleteMovie(movie);
    } else {
      handleSaveMovieClick(movie);
    }
  }

  const handleSaveMovieClick = (movie) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.saveMovie(movie, token)
        .then((newMovie) => {
          if (!newMovie) {
            throw new Error("При добавлении фильма произошла ошибка");
          } else {
            localStorage.setItem("userMovies", JSON.stringify((newMovie = [newMovie.movie, ...userMovies]))
            );
            setUserMovies(newMovie);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleDeleteMovie = (movie) => {
    const token = localStorage.getItem('jwt');

    const movieId = movie.id || movie.movieId;
    const selectedMovie = userMovies.find((item) => item.movieId === movieId);
    mainApi.deleteSavedMovie(selectedMovie._id, token)
      .then(() => {
        const newMoviesList = userMovies.filter((c) => c.movieId !== movieId);
        setUserMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const handleDeleteMovieBtn = (movie) => {
    handleDeleteMovie(movie);
  }

  const handleSearchSavedMovies = (keyword) => {
    setIsNoSavedMoviesFound(false);
    const key = new RegExp(keyword, "gi");
    const findedMovies = userMovies.filter((m) => key.test(m.nameRU) || key.test(m.nameEN));
    if (findedMovies.length === 0) {
      setIsNoSavedMoviesFound(true);
    } else {
      setIsNoSavedMoviesFound(false);
    }
    setFindedUserMovies(findedMovies);
  }

  const handleCheckBox = () => {
    setShortMovies(!shortMovies);
  }

  const filterShortMovies = (arr) => {
    if (arr.length !== 0 || arr !== "undefind") {
      return arr.filter((movie) =>
        shortMovies ? movie.duration <= 40 : true
      );
    }
  }

  const checkSavedMovie = (movie) => {
    return (movie.isSaved = userMovies.some((userMovie) => userMovie.movieId === movie.id
    ));
  }

  useEffect(() => {
    checkToken()
    if (loggedIn) {
      setIsLoading(true)
      setIsLoadingMovies(true)
      const token = localStorage.getItem('jwt');
      Promise.all([
        mainApi.getUserInfo(token),
        moviesApi.getMovies(),
        mainApi.getSavedMovies(token),
      ])
        .then(([userData, allMovies, savedMovies]) => {
          localStorage.setItem("currentUser", JSON.stringify(userData));
          setCurrentUser(userData);

          const savedMoviesList = savedMovies.filter((item) => item.owner === userData._id).reverse();
          localStorage.setItem("userMovies", JSON.stringify(savedMoviesList));
          setUserMovies(savedMoviesList);

          localStorage.setItem("movies", JSON.stringify(allMovies));
          setMovies(allMovies);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoadingMovies(false)
          setIsLoading(false)
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    checkSavedMovie(sortedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMovies]);

  function showSearchedMovies() {
    setIsSavedMoviesSearch(true);
  }

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const excludeHeaderForRoutes = [
    '/signin',
    '/signup',
  ];

  const excludeFooterForRoutes = [
    '/signin',
    '/signup',
    '/profile',
  ];

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {useRouteMatch(excludeHeaderForRoutes) ? null : (
          <Header
            loggedIn={loggedIn}
            onMenu={handleOpenMenu}
          />
        )}

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            onGetMovies={handleSearchMovies}
            onSaveMovie={handleToggleSave}
            movies={filterShortMovies(sortedMovies)}
            isShortMovie={shortMovies}
            savedMovies={userMovies}
            likedMovies={checkSavedMovie}
            isLoading={isLoadingMovies}
            isNoMoviesFound={isNoMoviesFound}
            onFilter={handleCheckBox}
            buttonTitle="Сохранить"
            userMovies={userMovies}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoading={isLoadingMovies}
            movies={filterShortMovies(userMovies)}
            isNoSavedMoviesFound={isNoSavedMoviesFound}
            isShortMovie={shortMovies}
            handleSearchSavedMovies={handleSearchSavedMovies}
            showSearchedMovies={showSearchedMovies}
            loggedIn={loggedIn}
            onDeleteSavedMovie={handleDeleteMovieBtn}
            onFilter={handleCheckBox}
            isSavedMovies={true}
            isSavedMoviesSearch={isSavedMoviesSearch}
            foundUserMovies={findedUserMovies}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            isLoading={isLoadingUpdateUser}
            onUpdateUser={handleUpdateUser}
            profileUpdateMessage={profileUpdateMessage}
            onSignOut={handleSignOut}
            userResStatus={updateUserResStatus}
          />

          <Route path="/signup" >
            <Register
              loggedIn={loggedIn}
              onRegister={handleRegister}
              authResStatus={authResStatus}
              regResStatus={registrationResStatus}
              isLoadingRegister={isLoadingRegister || isLoading || isLoadingLogin}
            />
          </Route>

          <Route path="/signin">
            <Login
              loggedIn={loggedIn}
              onLogin={handleSignin}
              authResStatus={authResStatus}
              tokenResStatus={tokenAuthResStatus}
              isLoadingLogin={isLoadingLogin || isLoading || isLoadingRegister}
            />
          </Route>

          <Route path="*">
            <NoPageFound />
          </Route>

        </Switch>

        {useRouteMatch(excludeFooterForRoutes) ? null : (
          <Footer />
        )}
        {menuIsOpen && (<MenuPopup isOpen={menuIsOpen} onClose={handleCloseMenu} />)}

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

