import { useState } from "react";
import { data } from "../../assets/data/data";
import { Button } from "../../components/blocks/Button/Button";
import { FilterCheckbox } from "../../components/blocks/FilterCheckbox/FilterCheckbox";
import { MoviesCardList } from "../../components/blocks/MoviesCardList/MoviesCardList";
import Preloader from "../../components/blocks/Preloader/Preloader";
import { SearchForm } from "../../components/blocks/SearchForm/SearchForm";
import "./Movies.css";

export const Movies = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    isShort: false,
  });

  const handleChange = (e) => {
    const { type, checked, name } = e.target;
    const value = type === "checkbox" ? checked : e.target.value;

    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movieData);
  };

  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <section className="movies">
        <SearchForm
          name="movies"
          onSubmit={handleSubmit}
          onChange={handleChange}
          data={movieData}
        >
          <FilterCheckbox onChange={handleChange} data={data.movies.checkbox} />
        </SearchForm>
        {data.movies.list ? (
          <>
            <MoviesCardList data={data.movies.list} />
            <Button
              ariaLabel="Загрузить еще контент"
              onClick={handleClick}
              type="submit"
              className="movies__more-content-button"
            >
              {data.movies.moreContentButton.name}
            </Button>
          </>
        ) : (
          <Preloader />
        )}
      </section>
    </div>
  );
};
