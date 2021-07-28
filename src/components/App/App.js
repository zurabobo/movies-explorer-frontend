import { React, useState } from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

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

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const handleSignup = () => {
    setLoggedIn(true);
  };

  const handleSignin = () => {
    setLoggedIn(true);
  };


  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const excludeHeaderForRoutes = [
    '/sign-in',
    '/sign-up',
  ];

  const excludeFooterForRoutes = [
    '/sign-in',
    '/sign-up',
    '/profile',
  ];

  return (
    <>
      {useRouteMatch(excludeHeaderForRoutes) ? null : (
        <Header
          loggedIn={loggedIn}
          onSignup={handleSignup}
          onSignin={handleSignin}
          onMenu={handleOpenMenu}
        />
      )}

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies buttonTitle="Сохранить" />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/sign-up" >
          <Register />
        </Route>

        <Route path="/sign-in">
          <Login />
        </Route>

        <Route>
          <NoPageFound />
        </Route>

      </Switch>
      {useRouteMatch(excludeFooterForRoutes) ? null : (
        <Footer />
      )}
      {menuIsOpen && (<MenuPopup isOpen={menuIsOpen} onClose={handleCloseMenu} />)}

    </>
  );
}

export default App;
