import PropTypes from "prop-types";
import "./AboutDurationBar.css";

/**
 * Компонент раздела О проекте с длительностью этапов
 * @component
 * @param { Object } props
 * @param { { backend: { duration: string, name: string }, frontend: { duration: string, name: string } } } props.data - объект с данными для заголовков
 */

export const AboutDurationBar = ({ data }) => {
  const { backend, frontend } = data;

  return (
    <div className="about-project__duration">
      <span className="about-project__duration-bar about-project__duration-bar-accent about-project__duration-bar_type_front">
        {backend.duration}
      </span>
      <span className="about-project__duration-bar about-project__duration-bar_type_back">
        {frontend.duration}
      </span>
      <p className="about-project__duration-caption about-project__duration-caption_type_front">
        {frontend.name}
      </p>
      <p className="about-project__duration-caption about-project__duration-caption_type_back">
        {backend.name}
      </p>
    </div>
  );
};

AboutDurationBar.propTypes = {
  data: PropTypes.object,
};
