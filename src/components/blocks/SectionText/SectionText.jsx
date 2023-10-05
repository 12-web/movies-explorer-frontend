import PropTypes from "prop-types";
import "./SectionText.css";

/**
 * Компонент текста секции
 * @component
 * @param { Object } props
 * @param { string } props.baseClass - класс секции, определяющий индивидуальную стилизацию
 * @param { string } props.children - текст
 */

export const SectionText = ({ baseClass, children }) => {
  return <p className={`section-text ${baseClass}__text`}>{children}</p>;
};

SectionText.propTypes = {
  baseClass: PropTypes.string,
  children: PropTypes.string,
};
