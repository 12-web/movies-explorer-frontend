import PropTypes from "prop-types";
import "./Submit.css";

/**
 * Компонент кнопки отправки формы
 * @component
 * @param { Object } props
 * @param { string } props.submitText - текст кнопки
 */
export const Submit = ({ submitText, isValid }) => {
  return (
    <button
      className={`submit ${isValid ? "" : "submit_disabled"}`}
      type="submit"
      aria-label={submitText}
      disabled={!isValid}
    >
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
