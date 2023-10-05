import { useState } from "react";
import { Form } from "../../components/blocks/Form/Form";
import { InputBlock } from "../../components/blocks/InputBlock/InputBlock";
import { Submit } from "../../components/blocks/Submit/Submit";
import { Title } from "../../components/blocks/Title/Title";
import { data } from "../../assets/data/data";
import "./Profile.css";
import { Button } from "../../components/blocks/Button/Button";

export const Profile = ({ isFormLoading }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [isModify, setIsModify] = useState(false);

  const name = "Виталий";
  const nameId = "name-profile";
  const emailId = "email-profile";
  const isWarning = true;
  const { edit, signout, greet } = data.profile;

  /** отправка формы при авторизации пользователя */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModify(false);
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

  const handleEditClick = () => {
    setIsModify(true);
  };

  const handleSignoutClick = () => {};

  return (
    <section className="profile">
      <Title baseClass="profile">{`${greet.text} ${name}!`}</Title>
      <Form
        onSubmit={handleSubmit}
        name="profile"
        submitText={isFormLoading ? "Секундочку..." : "Cохранить"}
      >
        <fieldset className="form__inner-container">
          <InputBlock
            labelText="Имя"
            labelPos="center"
            baseClass="profile"
            isValidated={false}
            isBordered={true}
            id={nameId}
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            autoComplete="nope"
            required
            disabled={!isModify}
          />
          <InputBlock
            labelText="E-mail"
            baseClass="profile"
            labelPos="center"
            isValidated={false}
            id={emailId}
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            disabled={!isModify}
          />
        </fieldset>

        {isModify ? (
          <>
            {isWarning && (
              <span className="form__error-response">Текст ошибки</span>
            )}
            <Submit submitText={edit.save.text} />
          </>
        ) : (
          <>
            <Button onClick={handleEditClick} className="profile__edit">
              {edit.init.text}
            </Button>
            <Button onClick={handleSignoutClick} className="profile__signout">
              {signout.text}
            </Button>
          </>
        )}
      </Form>
    </section>
  );
};
