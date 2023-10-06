import PropTypes from "prop-types";
import { SectionText } from "../SectionText/SectionText";
import "./AboutDescription.css";

/**
 * Компонент раздела О проекте с описание этапов
 * @component
 * @param { Object } props
 * @param { { stages: { title: string }, duration: { title: string } } } props.data - объект с данными для заголовков
 */

export const AboutDescription = ({ data }) => {
  const { stages, duration } = data;

  return (
    <div className="about-project__container">
      <div>
        <h3 className="about-project__subtitle">{stages.title}</h3>
        <SectionText>{stages.text}</SectionText>
      </div>
      <div>
        <h3 className="about-project__subtitle">{duration.title}</h3>
        <SectionText>{duration.text}</SectionText>
      </div>
    </div>
  );
};

AboutDescription.propTypes = {
  data: PropTypes.object,
};
