import PropTypes from "prop-types";
import "./Input.css";

/**
 * Компонент инпута формы
 * @component
 * @param { Object } props
 * @param { function } props.onChange - функция изменения содержимого инпута
 * @param { boolean } props.isValidated - состояние кастомной валидации - добавляется спан для ошибки
 * @param { boolean } props.isWarning - состояние инпута при вводе неверного значения
 * @param { boolean } props.isBordered - состояние добавления к инпуту нижней границы
 * @param { Array } props.props - параметры, передаваемые в инпут (требования к заполнению, имя инпута и др)
 */
export const Input = ({
  onChange,
  errorText,
  isCustomValidated,
  isBordered = false,
  ...props
}) => {
  return (
    <input
      onChange={onChange}
      className={`input ${errorText ? "input_is-warning" : ""} ${
        isCustomValidated ? "input_type_validated" : "input_type_default"
      } ${isBordered ? "input_is-bordered" : ""}`}
      {...props}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  isWarning: PropTypes.bool,
  isBordered: PropTypes.bool,
  props: PropTypes.array,
};
