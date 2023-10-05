import { Logo } from "../../blocks/Logo/Logo";
import { Navigation } from "../../blocks/Navigation/Navigation";
import "./Header.css";

export const Header = ({ data, isAuth = true }) => {
  return (
    <header className="header">
      <div className="header__inner-container">
        <a href="/">
          <Logo baseClass="header" />
        </a>
        <Navigation isAuth={isAuth} data={data} />
      </div>
    </header>
  );
};
