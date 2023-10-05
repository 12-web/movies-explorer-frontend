import { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./AuthNavbar.css";
import { MenuBurger } from "../MenuBurger/MenuBurger";

/**
 * Компонент меню авторизованного пользователя
 * @component
 * @param { Object } props
 * @param { Object } props.data - объект с данными для меню авторизованного пользователя
 * @param { Object } props.data.account - данные для кнопки аккаунта (название, ссылка)
 * @param { Array } props.data.links - ссылки навигационного меню
 */

export const AuthNavbar = ({ data }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const { account, links } = data;

  const handleBurgerClick = () => setIsMenuOpened(!isMenuOpened);
  const handleLinkClick = () => setIsMenuOpened(!isMenuOpened);

  return (
    <nav className="header__nav header__nav_type_auth">
      <MenuBurger isMenuOpened={isMenuOpened} onClick={handleBurgerClick} />
      <div
        className={`header__nav-inner-container ${
          isMenuOpened ? "header__nav-inner-container_opened" : ""
        }`}
      >
        <div className="header__auth-menu">
          <ul className="header__auth-list">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `link header__auth-link ${
                      isActive ? "header__auth-link_is-active" : ""
                    } ${
                      link.isDesktopHidden
                        ? "header__auth-link_is-desktop-hidden"
                        : ""
                    }`
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            className="link header__link header__link_type_account"
            to={account.path}
          >
            {account.text}
            <span className="header__account-icon"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

AuthNavbar.propTypes = {
  data: PropTypes.shape({
    account: PropTypes.object,
    links: PropTypes.array,
  }),
};
