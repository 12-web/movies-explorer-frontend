import { AccentTitle } from "../../blocks/AccentTitle/AccentTitle";
import { SectionText } from "../../blocks/SectionText/SectionText";
import { SectionTitle } from "../../blocks/SectionTitle/SectionTitle";
import "./Techs.css";

export const Techs = ({ data }) => {
  const { title, stack, text } = data;
  const displayStackLength = (arr) => {
    const lastInt = arr.length % 10;
    const ending =
      lastInt > 4 || lastInt < 1 || (arr.length > 11 && arr.length < 14)
        ? "й"
        : lastInt > 1
        ? "и"
        : "я";
    return `${arr.length} технологи` + ending;
  };
  return (
    <section className="techs">
      <div className="techs__inner-container">
        <SectionTitle>{title}</SectionTitle>
        <AccentTitle baseClass="techs">{displayStackLength(stack)}</AccentTitle>
        <SectionText baseClass="techs">{text}</SectionText>
        <ul className="techs__list">
          {stack.map((tech, index) => (
            <li key={index} className="techs__item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
