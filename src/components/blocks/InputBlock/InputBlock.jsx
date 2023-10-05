import PropTypes from "prop-types";
import { Input } from "../Input/Input";
import "./InputBlock.css";

/**
 * Компонент блока инпута формы с лейблом и кастомизированной ошибкой
 * @component
 * @param { Object } props
 * @param { string } props.id - id инпута, к которму будет привязан label
 * @param { boolean } props.isValidated - состояние кастомной валидации - добавляется спан для ошибки
 * @param { string } props.labelText - текст лейбла
 * @param { string } props.labelPos - [top, center] - позиция лейбла по отношению к инпуту
 * @param { string } props.baseClass - - базовый класс раздела, к которму будет относиться заголовок (создание класса с
 * индивидуальными характеристиками)
 * @param { Array } props.props - параметры, передаваемые в инпут (требования к заполнению, имя инпута и др)
 */

export const InputBlock = ({
  id,
  isValidated = false,
  labelText,
  labelPos = "top",
  baseClass,
  ...props
}) => {
  return (
    <div className="input__container">
      <label
        className={`input__label input__label_pos_${labelPos}`}
        htmlFor={id}
      >
        {labelText}
      </label>
      <Input isValidated={isValidated} id={id} {...props} />
      {isValidated && <span className={`input__error ${id}-error`}>asds</span>}
    </div>
  );
};

InputBlock.propTypes = {
  id: PropTypes.string,
  isValidated: PropTypes.bool,
  labelText: PropTypes.string,
  labelPos: PropTypes.string,
  baseClass: PropTypes.string,
  props: PropTypes.array,
};
