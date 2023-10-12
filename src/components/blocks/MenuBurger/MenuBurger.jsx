import { useState } from "react";
import PropTypes from "prop-types";
import "./MenuBurger.css";

/**
 * Компонент меню-бургера
 * @component
 * @param { Object } props
 * @param { function } props.onClick - функция нажатия на бургер
 * @param { boolean } props.isMenuOpened - состояние открытия бургера
 */

export const MenuBurger = ({ isMenuOpened, onChangeMenuOpenness }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const handleClick = () => {
    setBurgerIsOpen(!burgerIsOpen);
    onChangeMenuOpenness(!isMenuOpened);
  };

  return (
    <button
      onClick={handleClick}
      className={`burger ${
        burgerIsOpen && isMenuOpened ? "burger_opened" : ""
      }`}
      type="button"
      aria-label="Открыть меню"
    />
  );
};

MenuBurger.propTypes = {
  onClick: PropTypes.func,
  isMenuOpened: PropTypes.bool,
};
