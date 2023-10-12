import { useNavigate } from "react-router-dom";
import { Button } from "../../components/blocks/Button/Button";
import "./PageNotFound.css";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <section className="not-found">
      <div className="not-found__inner-container">
        <p className="not-found__title">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>

      <Button onClick={handleClick} className="not-found__button">
        Назад
      </Button>
    </section>
  );
};
