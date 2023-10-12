import PropTypes from "prop-types";
import "./Form.css";

/**
 * Компонент формы
 * @component
 * @param { Object } props
 * @param { function } props.onSubmit - функция отправки формы
 * @param { string } props.name - имя формы
 * @param { JSX.Element } props.children - элементы формы
 */
export const Form = ({ onSubmit, name, children }) => {
  return (
    <form
      noValidate={true}
      onSubmit={onSubmit}
      className="form"
      id={name}
      action="#"
      name={name}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node,
};
