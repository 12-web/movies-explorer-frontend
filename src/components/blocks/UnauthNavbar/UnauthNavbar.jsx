import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./UnauthNavbar.css";

/**
 * Компонент меню неавторизованного пользователя
 * @component
 * @param { Object } props
 * @param { Object } props.data - объект с данными для меню авторизованного пользователя
 * @param { Object } props.data.register - данные для кнопки регистрации
 * @param { Object } props.data.login - данные для кнопки авторизации
 */
export const UnauthNavbar = ({ data }) => {
  const { register, login } = data;

  return (
    <nav className="header__nav header__nav_type_unauth">
      <Link className="link header__link" to={register.path}>
        {register.text}
      </Link>
      <Link className="button button_col_green header__button" to={login.path}>
        {login.text}
      </Link>
    </nav>
  );
};

UnauthNavbar.propTypes = {
  data: PropTypes.shape({
    register: PropTypes.object,
    login: PropTypes.object,
  }),
};
