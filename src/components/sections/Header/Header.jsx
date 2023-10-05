import { Logo } from "../../blocks/Logo/Logo";
import { useLocation } from "react-router-dom";
import { Navigation } from "../../blocks/Navigation/Navigation";
import { data } from "../../../assets/data/data";
import "./Header.css";

export const Header = ({ isAuth = true, ...props }) => {
  const location = useLocation();
  const isMain = location.pathname === "/";

  return (
    <header className={`header ${isMain ? "header_loc_main" : ""}`}>
      <div className="header__inner-container">
        <a href="/">
          <Logo baseClass="header" />
        </a>
        <Navigation
          {...props}
          isLocMain={isMain}
          isAuth={isAuth}
          data={data.header}
        />
      </div>
    </header>
  );
};
