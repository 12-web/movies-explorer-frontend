import { Promo } from "../../components/sections/Promo/Promo";
import { AboutProject } from "../../components/sections/AboutProject/AboutProject";
import { Techs } from "../../components/sections/Techs/Techs";
import { AboutMe } from "../../components/sections/AboutMe/AboutMe";
import { Portfolio } from "../../components/sections/Portfolio/Portfolio";
import { data } from "../../assets/data/data";

export const Main = () => {
  return (
    <>
      <Promo data={data.promo} />
      <AboutProject data={data.aboutProject} />
      <Techs data={data.techs} />
      <AboutMe data={data.aboutMe} />
      <Portfolio data={data.portfolio} />
    </>
  );
};
