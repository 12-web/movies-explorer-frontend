import "./Promo.css";

export const Promo = ({ data }) => {
  const { title, image } = data;
  return (
    <section className="promo">
      <div className="promo__inner-container">
        <h1 className="promo__title">{title}</h1>
        <img src={image.src} className="promo__image" alt={image.alt} />
      </div>
    </section>
  );
};
