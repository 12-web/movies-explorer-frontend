import { AboutDescription } from "../../blocks/AboutDescription/AboutDescription";
import { AboutDurationBar } from "../../blocks/AboutDurationBar/AboutDurationBar";
import { SectionTitle } from "../../blocks/SectionTitle/SectionTitle";
import "./AboutProject.css";

export const AboutProject = ({ data }) => {
  const { description, durationBar } = data;
  return (
    <section className="about-project">
      <SectionTitle>{data.title}</SectionTitle>
      <AboutDescription data={description} />
      <AboutDurationBar data={durationBar} />
    </section>
  );
};
