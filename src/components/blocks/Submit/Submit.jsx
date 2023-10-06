import PropTypes from "prop-types";
import "./Submit.css";

/**
 * Компонент кнопки отправки формы
 * @component
 * @param { Object } props
 * @param { string } props.submitText - текст кнопки
 */
export const Submit = ({ submitText }) => {
  return (
    <button className="submit" type="submit" aria-label={submitText}>
      {submitText}
    </button>
  );
};

Submit.propTypes = {
  buttonText: PropTypes.string,
};

Submit.defaultProps = {
  submitText: "Отправить",
};
