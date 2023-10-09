import { SHORT_MOVIE_DURATION } from "./constants";

export const filterMovies = (movies = [], isShort) => {
  return isShort
    ? movies.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION)
    : movies;
};

export const searchMovies = (movies, query) => {
  const movieQueryList = query.toLowerCase().split(" ");

  return movies.filter((movie) => {
    const movieNameRUList = movie.nameRU.toLowerCase().split(" ");
    const movieNameENList = movie.nameEN.toLowerCase().split(" ");
    return (
      movieNameRUList.some((word) => movieQueryList.includes(word)) ||
      movieNameENList.some((word) => movieQueryList.includes(word))
    );
  });
};
