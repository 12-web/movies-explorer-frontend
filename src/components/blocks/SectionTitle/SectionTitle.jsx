import PropTypes from "prop-types";
import "./SectionTitle.css";

/**
 * Компонент заголовка секции
 * @component
 * @param { Object } props
 * @param { string } props.children - текст
 */

export const SectionTitle = ({ children }) => {
  return <h2 className="section-title">{children}</h2>;
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};
