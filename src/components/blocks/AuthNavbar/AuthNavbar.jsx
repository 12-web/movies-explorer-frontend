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
 * @param { boolean } props.isLocMain - главная страница или нет
 * @param { boolean } props.isMenuOpened - cостояние открытия меню
 * @param { function } props.onChangeMenuOpenness - функция открытия/закрытия меню-бургера
 */

export const AuthNavbar = ({
  data,
  isLocMain,
  isMenuOpened,
  onChangeMenuOpenness,
}) => {
  const { account, links } = data;

  const handleBurgerClick = () => onChangeMenuOpenness(!isMenuOpened);
  const handleLinkClick = () => onChangeMenuOpenness(!isMenuOpened);

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
            <span
              className={`header__account-icon ${
                isLocMain ? "header__account-icon_loc_main" : ""
              }`}
            ></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

AuthNavbar.propTypes = {
  isLocMain: PropTypes.bool,
  data: PropTypes.shape({
    account: PropTypes.object,
    links: PropTypes.array,
  }),
  isMenuOpened: PropTypes.bool,
  onChangeMenuOpenness: PropTypes.func,
};
