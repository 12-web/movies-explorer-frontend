import "./Promo.css";
import promoImage from "../../../assets/images/promo-bg.webp";

export const Promo = ({ data }) => {
  return (
    <section className="promo">
      <div className="promo__inner-container">
        <h1 className="promo__title">{data.title}</h1>
        <img src={promoImage} className="promo__image" alt="" />
      </div>
    </section>
  );
};
