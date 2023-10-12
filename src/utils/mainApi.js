const { NODE_ENV, REACT_APP_BASE_URL } = process.env;
/**
 * Проверка ответа на запрос к серверу
 * @param { Promise } res - возвращаемый при fetch-запросе объект
 * @returns { Object } - возвращаемый объект переведен в json-формат и содержит готовые данные
 */
const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(res.status);
  }
  return res.json();
};

/**
 * Осуществление запроса к серверу
 * @param { string } url - эндпойнт запроса
 * @param { string } options - объект конфигурации запроса
 * @returns { Promise } - возвращаемый объект переведен в json-формат и содержит готовые данные
 */

const request = (url, options) => {
  return fetch(
    `${
      NODE_ENV === "production" ? REACT_APP_BASE_URL : "http://localhost:3000"
    }${url}`,
    options
  ).then((res) => getResponseData(res));
};

/**
 * Получение информации о пользователе
 * @returns { Promise.<{string[]}> } - возвращаемый объект содержит имя пользователя и email
 */
export const getUserInfo = () => {
  return request("/users/me", {
    credentials: "include",
  });
};

/**
 * Получение данных о пользователе
 * @param { Object } user
 * @param { string}  user.name - имя пользователя
 * @param { string } user.email - email пользователя
 * @returns { Promise.<{Object[]}> } - возвращаемый объект содержит имя пользователя, его email и куки
 */
export const editUserInfo = ({ name, email }) => {
  return request("/users/me", {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });
};

/**
 * Аутентификация пользователя
 * @param { Object } user
 * @param { string }  user.name - имя пользователя
 * @param { string }  user.email - пользователя при регистрации
 * @param { string } user.password - пользователя при регистрации
 * @returns { Promise.<{string[]}> } - возвращаемый объект содержит имя зарегистрированного пользователя и email
 */
export const register = ({ name, email, password }) => {
  return request("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      password,
      email,
    }),
  });
};

/**
 * Авторизация пользователя
 * @param { Object } user
 * @param { string } user.email - email пользователя при авторизации
 * @param { string } user.password - password пользователя при авторизации
 * @returns { Promise.<{string}> } - возвращаемый объект содержит токен пользователя и объект с именем и email
 */
export const authorize = ({ email, password }) => {
  return request("/signin", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  });
};

/**
 * Выход пользователя из личного кабинета
 */
export const signout = () => {
  return request("/signout", {
    method: "POST",
    credentials: "include",
  });
};
