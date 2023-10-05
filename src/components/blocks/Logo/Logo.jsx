import PropTypes from "prop-types";
import { data } from "../../../assets/data/data";
import "./Logo.css";

/**
 * Компонент логотипа
 * @component
 * @param { Object } props
 * @param { string } props.baseClass - функция изменения содержимого инпута
 */

export const Logo = ({ baseClass }) => {
  const { src, alt } = data.logo;
  return <img className={`logo ${baseClass}__logo`} alt={alt} src={src} />;
};

Logo.propTypes = {
  baseClass: PropTypes.string,
};
