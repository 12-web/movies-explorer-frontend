import PropTypes from "prop-types";
import "./AccentTitle.css";

/**
 * Компонент акцентного заголовка
 * @component
 * @param { Object } props
 * @param { string } props.baseClass - базовый класс раздела, к которму будет относиться заголовок (создание класса с
 * индивидуальными характеристиками)
 * @param { string } props.children - текст заголовка
 */

export const AccentTitle = ({ baseClass, children }) => {
  return (
    <h3 className={`accent-title ${baseClass}__accent-title`}>{children}</h3>
  );
};

AccentTitle.propTypes = {
  baseClass: PropTypes.string,
  children: PropTypes.string,
};
