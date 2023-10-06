import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Title } from "../../components/blocks/Title/Title";
import { Form } from "../../components/blocks/Form/Form";
import { InputBlock } from "../../components/blocks/InputBlock/InputBlock";
import { Logo } from "../../components/blocks/Logo/Logo";
import "./Login.css";
import { data } from "../../assets/data/data";
import { Submit } from "../../components/blocks/Submit/Submit";

/**
 * Компонент страницы авторизации пользователя
 * @component
 * @param { Object } props
 * @param { boolean } props.isFormLoading - состояние ожидания ответа от сервера при отправке формы
 * @param { function } props.onLogin - функция авторизации пользователя
 */
export const Login = ({ isFormLoading, onLogin }) => {
  const [userData, setUserData] = useState({
    email: "asdasd",
    password: "asdasd",
  });
  const emailId = "email-signin";
  const passwordId = "password-signin";
  const isWarning = false;
  const { title, submit, link } = data.login;

  /** отправка формы при авторизации пользователя */
  const handleSubmit = (e) => {
    e.preventDefault();
    // onLogin(userData);
    console.log(userData);
  };

  /** функция получения данных из формы */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <section className="login">
      <div className="login__inner-container">
        <Logo baseClass="login" />
        <Title>{title}</Title>
        <Form onSubmit={handleSubmit} name="signIn">
          <fieldset className="form__inner-container">
            <InputBlock
              labelText="E-mail"
              baseClass="login"
              labelPos="top"
              isValidated={true}
              isBordered={true}
              id={emailId}
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
            <InputBlock
              labelText="Пароль"
              labelPos="top"
              baseClass="login"
              isValidated={true}
              isBordered={true}
              id={passwordId}
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </fieldset>
          <div className="form__handles-container">
            <span
              className={`form__error-response ${
                isWarning ? "form__error-response_visible" : ""
              }`}
            >
              Текст ошибки
            </span>
            <Submit submitText={submit} />
          </div>
        </Form>
        <p className="text login__text">
          {link.description}&nbsp;
          <Link className="link login__link" to={link.href}>
            {link.text}
          </Link>
        </p>
      </div>
    </section>
  );
};

Login.propTypes = {
  isFormLoading: PropTypes.bool,
  onLogin: PropTypes.func,
};
