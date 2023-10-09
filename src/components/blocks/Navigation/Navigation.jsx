import PropTypes from "prop-types";
import { AuthNavbar } from "../AuthNavbar/AuthNavbar";
import { UnauthNavbar } from "../UnauthNavbar/UnauthNavbar";
import "./Navigation.css";

/**
 * Компонент навигации по сайту
 * @component
 * @param { Object } props
 * @param { Object } props.data - объект с данными для навигационного меню (названия ссылок и др)
 * @param { boolean } props.isLogged - авторизован полльзователь или нет
 * @param { boolean } props.isLocMain - главная страница или нет
 * @param { Object } props.props - дополнительные пропсы, относящиеся к меню-бургеру
 */

export const Navigation = ({ data, isLogged, isLocMain, ...props }) => {
  const { unauth, auth } = data;

  return (
    <>
      {isLogged ? (
        <AuthNavbar {...props} isLocMain={isLocMain} data={auth} />
      ) : (
        <UnauthNavbar data={unauth} />
      )}
    </>
  );
};

Navigation.propTypes = {
  data: PropTypes.object,
  isLogged: PropTypes.bool,
  isLocMain: PropTypes.bool,
  props: PropTypes.object,
};
