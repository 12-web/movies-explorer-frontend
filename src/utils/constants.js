export const MESSAGES = {
  serverError: "500 На сервере произошла ошибка.",
  notFoundError: "404 Страница по указанному маршруту не найдена.",
  emailExistError: "Пользователь с таким email уже существует.",
  profileError: "При обновлении профиля произошла ошибка.",
  registerError: "При регистрации пользователя произошла ошибка.",
  incorrectSignin: "Вы ввели неправильный логин или пароль.",
  tokenExistError:
    "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  incorrectToken:
    "При авторизации произошла ошибка. Переданный токен некорректен.",
  incorrectName:
    "Имя может содержать только латиницу, кириллицу, пробел и дефис",
  incorrectEmail: "Введите корректный email-адрес",
  contentNotFound: "Ничего не найдено",
  searchNameError: "Введите ключевое слово",
  successEditProfileMessage: "Данные успешно обновлены",
  contentSearchError:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
};

export const NAME_REG = /[A-Za-zА-Яа-яЁё\-\s]/g;

export const SHORT_MOVIE_DURATION = 40;

export const SCREEN_SIZES = {
  xl: {
    size: 1280,
    initialMovies: 16,
    increaseMovies: 4,
  },
  l: {
    size: 970,
    initialMovies: 12,
    increaseMovies: 3,
  },
  md: {
    size: 670,
    initialMovies: 8,
    increaseMovies: 2,
  },
  s: {
    size: 320,
    initialMovies: 5,
    increaseMovies: 2,
  },
};

export const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";
