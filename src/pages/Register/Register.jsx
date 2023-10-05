import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Title } from "../../components/blocks/Title/Title";
import { Form } from "../../components/blocks/Form/Form";
import { InputBlock } from "../../components/blocks/InputBlock/InputBlock";
import { Logo } from "../../components/blocks/Logo/Logo";
import { Submit } from "../../components/blocks/Submit/Submit";
import { data } from "../../assets/data/data";
import "./Register.css";

/**
 * Компонент страницы авторизации пользователя
 * @component
 * @param { Object } props
 * @param { boolean } props.isFormLoading - состояние ожидания ответа от сервера при отправке формы
 * @param { function } props.onLogin - функция авторизации пользователя
 */
export const Register = ({ isFormLoading, onRegister }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nameId = "name-signup";
  const emailId = "email-signup";
  const passwordId = "password-signup";
  const isWarning = true;
  const { title, submit, link } = data.register;

  /** отправка формы при авторизации пользователя */
  const handleSubmit = (e) => {
    e.preventDefault();
    // onRegister(userData);
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
    <section className="register">
      <Logo baseClass="register" />
      <Title>{title}</Title>
      <Form
        onSubmit={handleSubmit}
        name="signIn"
        submitText={isFormLoading ? "Секундочку..." : "Войти"}
      >
        <fieldset className="form__inner-container">
          <InputBlock
            labelText="Имя"
            baseClass="register"
            labelPos="top"
            isValidated={true}
            isBordered={true}
            id={nameId}
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <InputBlock
            labelText="E-mail"
            baseClass="register"
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
            baseClass="register"
            isValidated={true}
            isBordered={true}
            id={passwordId}
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            autoComplete="nope"
            required
          />
        </fieldset>
        {isWarning && (
          <span className="form__error-response">Текст ошибки</span>
        )}

        <Submit submitText={submit} />
      </Form>
      <p className="text login__text">
        {link.description}&nbsp;
        <Link className="link login__link" to={link.href}>
          {link.text}
        </Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  isFormLoading: PropTypes.bool,
  onLogin: PropTypes.func,
};
