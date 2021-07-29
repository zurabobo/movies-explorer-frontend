import React from "react";
import { NavLink } from "react-router-dom";
import "../MenuPopup/MenuPopup.css";
import "../Header/Header.css";

import ProfileEditButton from '../ProfileEditButton/ProfileEditButton';

import Modal from 'react-modal';
Modal.setAppElement('#root');


function MenuPopup({ isOpen, onClose, onClick }) {
  return (
    <Modal
    isOpen={isOpen}
    className='popup__container'
    overlayClassName={`popup ${(isOpen) ? 'popup_opened' : ''}`}
    closeTimeoutMS={250}
    onRequestClose={onClose}
    shouldCloseOnOverlayClick={true}
  >
        <button className="popup__close-btn" type="button" onClick={onClose} />
        <nav className="popup-navigation__container">
          <NavLink exact activeClassName="popup-navigation__link_active" to="/" className="popup-navigation__link" onClick={onClose}>Главная</NavLink>
          <NavLink activeClassName="popup-navigation__link_active" to="/movies" className="popup-navigation__link" onClick={onClose}>Фильмы</NavLink>
          <NavLink activeClassName="popup-navigation__link_active" to="/saved-movies" className="popup-navigation__link" onClick={onClose}>Сохраненные фильмы</NavLink>
        </nav>
          <NavLink to="/profile" className="popup-navigation__account-link">
          <ProfileEditButton onClick={onClose} />
          </NavLink>
    </Modal>
  );
}

export default MenuPopup;
