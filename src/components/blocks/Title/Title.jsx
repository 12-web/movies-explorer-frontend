import PropTypes from "prop-types";
import "./Title.css";

/**
 * Компонент заголовка
 * @component
 * @param { Object } props
 * @param { string } props.theme - тема, которая определяет стилизацию элемента (например, dark)
 * @param { string | string[] } props.children - текст заголовка
 */
export const Title = ({ children, baseClass }) => {
  return <h1 className={`title ${baseClass}__title`}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
