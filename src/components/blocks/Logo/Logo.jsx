import PropTypes from "prop-types";
import logo from "../../../assets/images/logo.svg";
import "./Logo.css";

/**
 * Компонент логотипа
 * @component
 * @param { Object } props
 * @param { string } props.baseClass - функция изменения содержимого инпута
 */

export const Logo = ({ baseClass }) => {
  return <img className={`logo ${baseClass}__logo`} src={logo} alt="" />;
};

Logo.propTypes = {
  baseClass: PropTypes.string,
};
