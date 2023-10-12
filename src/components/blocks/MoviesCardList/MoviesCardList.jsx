import { MoviesCard } from "../MoviesCard/MoviesCard";
import PropTypes from "prop-types";
import "./MoviesCardList.css";

/**
 * Компонент списка фильмов
 * @component
 * @param { Object } props
 * @param { Array } props.data - массив фильмов
 * @param { boolean } props.isSaved - сохранена ли карточка или нет
 */

export const MoviesCardList = ({
  onAddSavedMovie,
  onRemoveSavedMovie,
  data,
  savedMovieDisplay,
  savedMovies = [],
}) => {
  return (
    <ul className="movies__list">
      {data.map((movie, index) => (
        <MoviesCard
          savedMovieDisplay={savedMovieDisplay}
          savedMovies={savedMovies}
          onAddSavedMovie={onAddSavedMovie}
          onRemoveSavedMovie={onRemoveSavedMovie}
          key={index}
          data={movie}
        />
      ))}
    </ul>
  );
};

MoviesCard.propTypes = {
  data: PropTypes.shape({
    banner: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.number,
  }),
  isSaved: PropTypes.bool,
};
