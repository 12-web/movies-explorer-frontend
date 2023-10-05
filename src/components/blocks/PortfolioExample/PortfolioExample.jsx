import { Link } from "react-router-dom";
import "./PortfolioExample.css";

export const PortfolioExample = ({ component: Component, data }) => {
  const { name, href } = data;
  return (
    <Component className="portfolio__link-container">
      <Link
        className="link portfolio__link"
        to={href}
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__link-title">{name}</p>
        <span className="portfolio__link-icon"></span>
      </Link>
    </Component>
  );
};
