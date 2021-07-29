import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import ProfileEditButton from '../ProfileEditButton/ProfileEditButton';

function Navigation() {

  return (
    <>
      <nav className="navigation__container">
        <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохраненные фильмы</NavLink>
      </nav>
        <NavLink className="navigation__account-link" to="/profile">
          <ProfileEditButton />
        </NavLink>
    </>
  )
}

export default Navigation;