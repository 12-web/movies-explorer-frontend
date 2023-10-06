import PropTypes from "prop-types";
import "./Button.css";

/**
 * Компонент акцентного заголовка
 * @component
 * @param { Object } props
 * @param { string } props.className - дополнительный класс кнопки
 * @param { JSX.Element } props.children - текст кнопки
 * @param { function } props.onClick - функция нажатия на кнопку
 * @param { string } props.type - тип кнопки [button, submit]
 * @param { string } props.ariaLabel - атрибут aria-label
 */

export const Button = ({
  ariaLabel,
  type = "button",
  onClick,
  className,
  children,
}) => {
  return (
    <button
      aria-label={ariaLabel || ""}
      onClick={onClick}
      type={type}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
};
