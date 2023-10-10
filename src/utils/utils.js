import { SHORT_MOVIE_DURATION } from "./constants";

export const filterMovies = (movies = [], isShort) => {
  return isShort
    ? movies.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION)
    : movies;
};

export const searchMovies = (movies, query, isShort) => {
  const movieQuery = query.toLowerCase().trim();

  const searchedMovies = movies.filter((movie) => {
    const movieNameRU = movie.nameRU.toLowerCase();
    const movieNameEN = movie.nameEN.toLowerCase();
    return (
      movieNameRU.indexOf(movieQuery) !== -1 ||
      movieNameEN.indexOf(movieQuery) !== -1
    );
  });

  return filterMovies(searchedMovies, isShort);
};
