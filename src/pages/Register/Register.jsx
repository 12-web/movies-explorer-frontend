import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Title } from "../../components/blocks/Title/Title";
import { Form } from "../../components/blocks/Form/Form";
import { InputBlock } from "../../components/blocks/InputBlock/InputBlock";
import { Logo } from "../../components/blocks/Logo/Logo";
import { Submit } from "../../components/blocks/Submit/Submit";
import { data } from "../../assets/data/data";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import "./Register.css";

export const Register = ({
  isFormBlocked,
  onRegister,
  response,
  isErrorResponse = true,
}) => {
  const nameId = "name-signup";
  const emailId = "email-signup";
  const passwordId = "password-signup";
  const { title, submit, link } = data.register;

  const { isValid, values, handleChange, handleSubmit, errors } =
    useFormWithValidation({
      name: "",
      email: "",
      password: "",
    });
  const submitForm = handleSubmit(() => {
    onRegister(values);
  });

  return (
    <section className="register">
      <div className="register__inner-container">
        <Link className="register__logo-link" to="/">
          <Logo baseClass="register" />
        </Link>
        <Title>{title}</Title>
        <Form onSubmit={submitForm} name="signIn">
          <fieldset className="form__inner-container">
            <InputBlock
              labelText="Имя"
              baseClass="register"
              labelPos="top"
              isCustomValidated={true}
              errorText={errors.name}
              isBordered={true}
              id={nameId}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              minLength={2}
              maxLength={30}
              required
              disabled={isFormBlocked}
              pattern="[A-Za-zА-Яа-яЁё\-\s]{1,}"
            />
            <InputBlock
              labelText="E-mail"
              baseClass="register"
              labelPos="top"
              isCustomValidated={true}
              errorText={errors.email}
              isBordered={true}
              id={emailId}
              type="email"
              name="email"
              value={values.email}
              disabled={isFormBlocked}
              onChange={handleChange}
              required
            />
            <InputBlock
              labelText="Пароль"
              labelPos="top"
              baseClass="register"
              isCustomValidated={true}
              errorText={errors.password}
              isBordered={true}
              id={passwordId}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              disabled={isFormBlocked}
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

Register.propTypes = {
  onRegister: PropTypes.func,
  response: PropTypes.string,
  isErrorResponse: PropTypes.bool,
};
