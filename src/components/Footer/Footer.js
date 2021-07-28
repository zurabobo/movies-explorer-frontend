import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__text">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a className="footer__list-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link" href="https://github.com/zurabobo" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link" href="https://www.facebook.com/zura.bobokhidze.3" target="_blank" rel="noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer;