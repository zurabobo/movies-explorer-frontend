import { MAIN_API_URL } from "./config";

class MainApi {
  constructor({ MAIN_API_URL, headers }) {
    this._MAIN_API_URL = MAIN_API_URL;
    this._headers = headers;
  }

  register(data) {
    return fetch(`${this._MAIN_API_URL}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    }).then(this._getResData)
  }

  authorize(data) {
    return fetch(`${this._MAIN_API_URL}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    }).then(this._getResData);
  }

  checkToken(token) {
    return fetch(`${this._MAIN_API_URL}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._getResData)
  }

  getUserInfo(token) {
    return fetch(`${this._MAIN_API_URL}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    })
      .then(this._getResData);
  }

  updateUserProfile(data, token) {
    return fetch(`${this._MAIN_API_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then(this._getResData)
  }

  saveMovie(movie, token) {
    return fetch(`${this._MAIN_API_URL}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._getResData)
  }

  getSavedMovies(token) {
    return fetch(`${this._MAIN_API_URL}/movies`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._getResData)
  }

  deleteSavedMovie(id, token) {
    return fetch(`${this._MAIN_API_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._getResData)
  }

  _getResData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

const mainApi = new MainApi({
  MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi;

