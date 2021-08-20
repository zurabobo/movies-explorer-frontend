import { MOVIES_API_URL } from "./config";

class MoviesApi {
  constructor({ MOVIES_API_URL, headers }) {
    this._MOVIES_API_URL = MOVIES_API_URL;
    this._headers = headers;
  }

  _getResData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._MOVIES_API_URL}`, {
      headers: this._headers,
    }).then(this._getResData);
  }

}

const moviesApi = new MoviesApi({
  MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
