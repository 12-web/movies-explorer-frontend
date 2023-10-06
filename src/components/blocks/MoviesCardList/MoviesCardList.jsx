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

export const MoviesCardList = ({ data, isSaved = false }) => {
  return (
    <ul className="movies__list">
      {data.map((movie, index) => (
        <MoviesCard isSaved={isSaved} key={index} data={movie} />
      ))}
    </ul>
  );
};

MoviesCard.propTypes = {
  data: PropTypes.shape({
    banner: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.string,
  }),
  isSaved: PropTypes.bool,
};
