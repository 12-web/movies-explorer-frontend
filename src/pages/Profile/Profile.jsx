import PropTypes from "prop-types";
import { Form } from "../../components/blocks/Form/Form";
import { InputBlock } from "../../components/blocks/InputBlock/InputBlock";
import { Submit } from "../../components/blocks/Submit/Submit";
import { Title } from "../../components/blocks/Title/Title";
import { data } from "../../assets/data/data";
import "./Profile.css";
import { Button } from "../../components/blocks/Button/Button";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect } from "react";

export const Profile = ({
  onEdit,
  response,
  isErrorResponse = true,
  isFormModify,
  onSetFormModifyStatus,
  onSignout,
}) => {
  const user = useContext(CurrentUserContext);
  const nameId = "name-profile";
  const emailId = "email-profile";
  const { edit, signout, greet } = data.profile;

  const { isValid, values, handleChange, handleSubmit, setValues } =
    useFormWithValidation({ name: "", email: "" });

  useEffect(() => {
    setValues({ name: user.name, email: user.email });
  }, [setValues, user]);

  const submitForm = handleSubmit(() => {
    onEdit(values);
  });

  const handleEditClick = () => onSetFormModifyStatus(true);

  const handleSignoutClick = () => onSignout();

  return (
    <section className="profile">
      <div className="profile__inner-container">
        <Title baseClass="profile">{`${greet.text} ${user.name}!`}</Title>
        <Form onSubmit={submitForm} name="profile">
          <fieldset className="form__inner-container">
            <InputBlock
              labelText="Имя"
              labelPos="center"
              baseClass="profile"
              isCustomValidated={false}
              isBordered={true}
              id={nameId}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
              disabled={!isFormModify}
            />
            <InputBlock
              labelText="E-mail"
              baseClass="profile"
              labelPos="center"
              isCustomValidated={false}
              id={emailId}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              disabled={!isFormModify}
            />
          </fieldset>
          <div className="form__handles-container">
            {!isErrorResponse ? (
              <span
                className={`form__response ${
                  response ? "form__response_visible" : ""
                }`}
              >
                {response}
              </span>
            ) : (
              ""
            )}

            {isFormModify ? (
              <>
                {isErrorResponse ? (
                  <span
                    className={`form__response form__response_is-error ${
                      response ? "form__response_visible" : ""
                    }`}
                  >
                    {response}
                  </span>
                ) : (
                  ""
                )}

                <Submit isValid={isValid} submitText={edit.save.text} />
              </>
            ) : (
              <>
                <Button onClick={handleEditClick} className="profile__edit">
                  {edit.init.text}
                </Button>
                <Button
                  onClick={handleSignoutClick}
                  className="profile__signout"
                >
                  {signout.text}
                </Button>
              </>
            )}
          </div>
        </Form>
      </div>
    </section>
  );
};

Profile.propTypes = {
  onEdit: PropTypes.func,
  response: PropTypes.string,
  isErrorResponse: PropTypes.bool,
  isFormModify: PropTypes.bool,
  onSetFormModifyStatus: PropTypes.func,
  onSignout: PropTypes.func,
};
