import PropTypes from "prop-types";
import "./FilterCheckbox.css";

/**
 * Компонент акцентного заголовка
 * @component
 * @param { Object } props
 * @param { Object } props.data - объект с данными чекбокса (текст лейбла, название элемента и др)
 * @param { function } props.onChange - функция изменения состояния чекбокса
 */
export const FilterCheckbox = ({ name, data, onChange, ...props }) => {
  const { baseClass, text } = data;

  return (
    <label
      className={`checkbox-label ${baseClass}__checkbox-label`}
      htmlFor={name}
    >
      <input
        name={name}
        onChange={onChange}
        id={name}
        {...props}
        className={`checkbox ${baseClass}__checkbox`}
        type="checkbox"
      />
      {text}
    </label>
  );
};

FilterCheckbox.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};
