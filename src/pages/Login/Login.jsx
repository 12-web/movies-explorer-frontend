import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Title } from "../../components/blocks/Title/Title";
import { Form } from "../../components/blocks/Form/Form";
import { InputBlock } from "../../components/blocks/InputBlock/InputBlock";
import { Logo } from "../../components/blocks/Logo/Logo";
import { data } from "../../assets/data/data";
import { Submit } from "../../components/blocks/Submit/Submit";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import "./Login.css";

export const Login = ({ onLogin, response, isErrorResponse = true }) => {
  const emailId = "email-signin";
  const passwordId = "password-signin";
  const { title, submit, link } = data.login;

  const { isValid, values, handleChange, handleSubmit, errors } =
    useFormWithValidation({
      email: "",
      password: "",
    });
  const submitForm = handleSubmit(() => {
    onLogin(values);
  });

  return (
    <section className="login">
      <div className="login__inner-container">
        <Logo baseClass="login" />
        <Title>{title}</Title>
        <Form onSubmit={submitForm} name="signIn">
          <fieldset className="form__inner-container">
            <InputBlock
              labelText="E-mail"
              baseClass="login"
              labelPos="top"
              isCustomValidated={true}
              isBordered={true}
              id={emailId}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              errorText={errors.email}
              required
            />
            <InputBlock
              labelText="Пароль"
              labelPos="top"
              baseClass="login"
              isCustomValidated={true}
              isBordered={true}
              id={passwordId}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              errorText={errors.password}
              required
            />
          </fieldset>
          <div className="form__handles-container">
            <span
              className={`form__response ${
                response ? "form__response_visible" : ""
              } ${isErrorResponse ? "form__response_is-error" : ""}`}
            >
              {response}
            </span>
            <Submit isValid={isValid} submitText={submit} />
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
  onRegister: PropTypes.func,
  response: PropTypes.string,
  isErrorResponse: PropTypes.bool,
};
