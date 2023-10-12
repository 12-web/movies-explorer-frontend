import { MOVIES_URL } from "./constants";

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

const request = (url = "/", options) => {
  return fetch(
    `${
      NODE_ENV === "production" ? REACT_APP_BASE_URL : "http://localhost:3000"
    }${url}`,
    options
  ).then((res) => getResponseData(res));
};

/**
 * Осуществление запроса к серверу
 * @param { string } url - эндпойнт запроса
 * @param { string } options - объект конфигурации запроса
 * @returns { Promise } - возвращаемый объект переведен в json-формат и содержит готовые данные
 */

const externalRequest = (baseURL, url = "/", options) => {
  return fetch(baseURL + url, options).then((res) => getResponseData(res));
};

/**
 * Получение фильмов
 * @returns { Promise.<{Object[]}> } - возвращаемый объект содержит массив фильмов
 */
export const getMovies = () => {
  return externalRequest(MOVIES_URL);
};

/**
 * Получение сохраненных пользователем фильмов
 * @returns { Promise.<{Object[]}> } - возвращаемый объект содержит массив фильмов
 */
export const getSavedMovies = () => {
  return request("/movies", {
    credentials: "include",
  });
};

/**
 * Создание сохраненного пользователем фильма
 * @param { Object } movie - объект с данными о фильме
 * @returns { Promise.<{Object[]}> } - возвращаемый объект содержит объект с данными о фильме
 */
export const createSavedMovie = (movie) => {
  return request("/movies", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...movie,
    }),
  });
};

/**
 * Удаление сохраненного пользовталем фильм
 * @param { string } id - id фильма
 */
export const deleteSavedMovie = (id) => {
  return request(`/movies/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
};
