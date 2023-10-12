import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./MoviesCard.css";

/**
 * Компонент карточки фильма
 * @component
 * @param { Object } props
 * @param { Object } props.data - данные карточки (название, картинка и др)
 * @param { string } props.data.banner - баннер фильм
 * @param { string } props.data.name - название фильма
 * @param { number } props.data.duration - длительность фильма
 * @param { boolean } props.isSaved - сохранена ли карточка или нет
 * @param { boolean } props.onClick - функция нажатия на иконку лайка / удаления
 */

export const MoviesCard = ({
  onAddSavedMovie,
  onRemoveSavedMovie,
  data,
  savedMovies,
  savedMovieDisplay = false,
}) => {
  const {
    id,
    country,
    description,
    director,
    nameRU,
    nameEN,
    duration,
    image,
    trailerLink,
    year,
    _id,
  } = data;
  const checkSavedMovie = (movies, movieId) => {
    return movies.find((m) => m.movieId === movieId);
  };
  const savedMovie = checkSavedMovie(savedMovies, id);
  const baseURL = "https://api.nomoreparties.co";
  const imageLink = image.url ? baseURL + image.url : image;

  const displayedMovieDuration = (duration) => {
    if (duration >= 60) {
      return `${(duration / 60).toFixed(0)}ч ${duration % 60}м`;
    }
    return `${duration}м`;
  };

  const handleDeleteClick = () => {
    onRemoveSavedMovie(_id);
  };

  const handleLikeClick = () => {
    const movieData = {
      country,
      director,
      duration,
      year,
      description,
      image: baseURL + image.url,
      trailerLink: trailerLink + ".ru",
      thumbnail: "https://google.com",
      movieId: id,
      nameRU,
      nameEN,
    };

    savedMovie
      ? onRemoveSavedMovie(savedMovie._id)
      : onAddSavedMovie(movieData);
  };
  return (
    <div className="movie-card">
      <a
        className="movie-card__link"
        aria-label="Перейти к трейлеру фильма"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movie-card__banner" src={imageLink} alt="" />
      </a>
      <p className="movie-card__name">{nameRU}</p>
      {savedMovieDisplay ? (
        <Button
          onClick={handleDeleteClick}
          className="movie-card__button movie-card__button_type_remove"
          ariaLabel="Удалить карточку"
        />
      ) : (
        <Button
          onClick={handleLikeClick}
          ariaLabel="Лайкнуть фильм"
          className={`movie-card__button movie-card__button_type_like ${
            savedMovie ? "movie-card__button_type_like_active" : ""
          }`}
        />
      )}

      <span className="movie-card__duration">
        {displayedMovieDuration(duration)}
      </span>
    </div>
  );
};

MoviesCard.propTypes = {
  data: PropTypes.PropTypes.shape({
    banner: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.number,
  }),
  isSaved: PropTypes.bool,
  onClick: PropTypes.func,
};
