import { Logo } from "../../blocks/Logo/Logo";
import { useLocation, Link } from "react-router-dom";
import { Navigation } from "../../blocks/Navigation/Navigation";
import { data } from "../../../assets/data/data";
import "./Header.css";

export const Header = ({ isLogged = true, ...props }) => {
  const location = useLocation();
  const isMain = location.pathname === "/";

  return (
    <header className={`header ${isMain ? "header_loc_main" : ""}`}>
      <div className="header__inner-container">
        <Link to="/">
          <Logo baseClass="header" />
        </Link>
        <Navigation
          {...props}
          isLocMain={isMain}
          isLogged={isLogged}
          data={data.header}
        />
      </div>
    </header>
  );
};
