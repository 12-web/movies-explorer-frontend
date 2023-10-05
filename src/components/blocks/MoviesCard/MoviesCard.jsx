import { useState } from "react";
import PropTypes from "prop-types";
import "./MoviesCard.css";
import { Button } from "../Button/Button";

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

export const MoviesCard = ({ data, isSaved, onClick }) => {
  const { banner, name = "asdasd", duration = "asd" } = data;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    // onClick();
  };

  return (
    <div className="movie-card">
      <img className="movie-card__banner" src={banner} alt="" />
      <p className="movie-card__name">{name}</p>
      {isSaved ? (
        <Button
          onClick={onClick}
          className="movie-card__button movie-card__button_type_remove"
          ariaLabel="Удалить карточку"
        />
      ) : (
        <Button
          onClick={handleClick}
          ariaLabel="Лайкнуть фильм"
          className={`movie-card__button movie-card__button_type_like ${
            isActive ? "movie-card__button_type_like_active" : ""
          }`}
        />
      )}
      <span className="movie-card__duration">{duration}</span>
    </div>
  );
};

MoviesCard.propTypes = {
  data: PropTypes.PropTypes.shape({
    banner: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.string,
  }),
  isSaved: PropTypes.bool,
  onClick: PropTypes.func,
};
