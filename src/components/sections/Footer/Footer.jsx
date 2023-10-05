import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = ({ data }) => {
  const { title, links } = data;
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="footer__inner-container">
        <h3 className="footer__title">{title}</h3>
        <div className="footer__info">
          <span className="footer__copyright">&copy; {currentYear}</span>
          <ul className="footer__links">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="link footer__link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
