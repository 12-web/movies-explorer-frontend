import { useState } from "react";
import { data } from "../../assets/data/data";
import { FilterCheckbox } from "../../components/blocks/FilterCheckbox/FilterCheckbox";
import { MoviesCardList } from "../../components/blocks/MoviesCardList/MoviesCardList";
import Preloader from "../../components/blocks/Preloader/Preloader";
import { SearchForm } from "../../components/blocks/SearchForm/SearchForm";
import "../Movies/Movies.css";

export const SavedMovies = () => {
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

  return (
    <div>
      <section className="movies">
        <SearchForm
          name="saved-movies"
          onSubmit={handleSubmit}
          onChange={handleChange}
          data={movieData}
        >
          <FilterCheckbox
            onChange={handleChange}
            data={data.savedMovies.checkbox}
          />
        </SearchForm>
        {data.savedMovies.list ? (
          <MoviesCardList isSaved={true} data={data.savedMovies.list} />
        ) : (
          <Preloader />
        )}
      </section>
    </div>
  );
};
