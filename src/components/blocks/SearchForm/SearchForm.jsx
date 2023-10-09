import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./SearchForm.css";

/**
 * Компонент поиска фильмов
 * @component
 * @param { Object } props
 * @param { function } props.onSubmit - функция отправки формы
 * @param { function } props.onChange - функция изменения данных формы
 * @param { { title: string } } props.data - данные формы (название и др)
 * @param { { children: JSX.Element} } props.children - дочерние элементы (чекбокс и др)
 * @param { string } props.name - имя формы
 */

export const SearchForm = ({
  onSubmit,
  onChange,
  children,
  name,
  value,
  formErrorText,
  ...props
}) => {
  return (
    <div className="movies__search-outer-container">
      <form
        onSubmit={onSubmit}
        className="movies__search"
        action=""
        name={name}
        noValidate
      >
        <div className="movies__search-inner-container">
          <div className="movies__input-container">
            <span className="movies__search-icon" />
            <input
              name={name}
              onChange={onChange}
              placeholder="Поиск"
              className="movies__input"
              value={value}
              {...props}
            />
          </div>
          <Button className="movies__search-submit" type="submit">
            Найти
          </Button>
        </div>
        {children}
      </form>
      <p className="section-text movies__form-error">{formErrorText}</p>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node,
  name: PropTypes.string,
  data: PropTypes.string,
};
