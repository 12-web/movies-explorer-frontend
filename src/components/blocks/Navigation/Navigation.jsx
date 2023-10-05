import PropTypes from "prop-types";
import { AuthNavbar } from "../AuthNavbar/AuthNavbar";
import { UnauthNavbar } from "../UnauthNavbar/UnauthNavbar";
import "./Navigation.css";

/**
 * Компонент навигации по сайту
 * @component
 * @param { Object } props
 * @param { Object } props.data - объект с данными для навигационного меню (названия ссылок и др)
 * @param { boolean } props.isAuth - ваторизован полльзователь или нет
 */

export const Navigation = ({ data, isAuth }) => {
  const { unauth, auth } = data;

  return (
    <>{isAuth ? <AuthNavbar data={auth} /> : <UnauthNavbar data={unauth} />}</>
  );
};

Navigation.propTypes = {
  data: PropTypes.object,
  isAuth: PropTypes.bool,
};
