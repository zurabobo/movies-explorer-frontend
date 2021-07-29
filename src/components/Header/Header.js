import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HeaderLogo from '../../images/header-logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, onSignup, onSignin, onMenu }) {

  return (
      <header className={loggedIn ? "header header__grid-template" : "header"}>
      <Link to="/">
        <img alt="логотип movies-explorer" className="header__logo" src={HeaderLogo} />
      </Link>
      {loggedIn ? (<Navigation />) : (<nav className="header__auth-navlink-container">
        <NavLink className="header__auth-navlink" to="/sign-up" onClick={onSignup}>Регистрация</NavLink>
        <NavLink className="header__auth-navlink header__auth-navlink_bgcolor_black" to="/sign-in" onClick={onSignin}>Войти</NavLink>
      </nav>)}
      {loggedIn &&
        (
          <button className="header__menu-btn" type="button" onClick={onMenu}></button>
        )
      }
    </header>
  )
}

export default Header;