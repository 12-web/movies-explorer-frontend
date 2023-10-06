import { Link } from "react-router-dom";
import { AccentTitle } from "../../blocks/AccentTitle/AccentTitle";
import { SectionText } from "../../blocks/SectionText/SectionText";
import { SectionTitle } from "../../blocks/SectionTitle/SectionTitle";
import "./AboutMe.css";

export const AboutMe = ({ data }) => {
  const { title, name, profession, about, links, photo } = data;
  return (
    <section className="about-me">
      <SectionTitle>{title}</SectionTitle>
      <div className="about-me__inner-container">
        <div className="about-me__text-container">
          <AccentTitle baseClass="about-me">{name}</AccentTitle>
          <p className="about-me__profession">{profession}</p>
          <SectionText baseClass="about-me">{about}</SectionText>
          <ul className="about-me__links">
            {links.map((link, index) => (
              <li key={index} className="about-me__link-container">
                <Link
                  className="link about-me__link"
                  target="_blank"
                  rel="noreferrer"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <img className="about-me__img" src={photo} alt="Фото пользователя" />
      </div>
    </section>
  );
};
