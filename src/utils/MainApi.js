import { BASE_MAIN_URL } from '../utils/Constants';

//конструктор API
class Api {
  constructor ({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  //приватный метод проверки ответа сервера и преобразование из json
  _transformResJson (res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // публичный метод загрузки информации о пользователе
  getUserData () {
    return fetch(this.baseUrl + '/users/me', {
      headers: {
        authorization: this.headers
      }
    })

    .then(this._transformResJson)
  }


}
