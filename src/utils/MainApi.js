class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
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
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    }).then(this._getResData);
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._getResData)
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    })
      .then(this._getResData);
  }


  updateUserProfile(data, token) {
    return fetch(`${this._baseUrl}/users/me`, {
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
    return fetch(`${this._baseUrl}/movies`, {
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
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._getResData)
  }

  deleteSavedMovie(id, token) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._getResData)
  }

  getAppData(token) {
    return Promise.all([this.getUserInfo(token), this.getSavedMovies(token)]);
}

  _getResData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-explorer.zb.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi;

