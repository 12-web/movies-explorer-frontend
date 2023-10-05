import { PortfolioExample } from "../../blocks/PortfolioExample/PortfolioExample";
import "./Portfolio.css";

export const Portfolio = ({ data }) => {
  const { title, links } = data;
  return (
    <section className="portfolio">
      <div className="portfolio__inner-container">
        <h2 className="portfolio__title">{title}</h2>
        <ul className="portfolio__links">
          {links.map((link, index) => (
            <PortfolioExample key={index} component="li" data={link} />
          ))}
        </ul>
      </div>
    </section>
  );
};
