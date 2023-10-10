import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { data } from "../../assets/data/data";
import { Button } from "../../components/blocks/Button/Button";
import { FilterCheckbox } from "../../components/blocks/FilterCheckbox/FilterCheckbox";
import { MoviesCardList } from "../../components/blocks/MoviesCardList/MoviesCardList";
import Preloader from "../../components/blocks/Preloader/Preloader";
import { SearchForm } from "../../components/blocks/SearchForm/SearchForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useResize } from "../../hooks/useResize";
import { searchMovies } from "../../utils/utils";
import { useQueryResponse } from "../../hooks/useQueryResponse";
import { MESSAGES } from "../../utils/constants";
import "./Movies.css";

export const Movies = ({
  onGetMovies,
  onAddSavedMovie,
  onRemoveSavedMovie,
  savedMovies,
  isLoading,
}) => {
  const [formErrorText, setFormErrorText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [fullMoviesList, setFullMovieList] = useState([]);
  const [isFullMoviesCount, setIsFullMoviesCount] = useState(false);
  const { screen } = useResize();

  const {
    isStartedSearch,
    setIsStartedSearch,
    responseMessage,
    setResponseMessage,
  } = useQueryResponse();
  const { values, handleChange, handleSubmit, setValues, isValid } =
    useFormWithValidation({
      movieName: "",
      isShort: false,
    });

  useEffect(() => {
    const movieName = localStorage.getItem("movieName");
    if (movieName) {
      const isShort = JSON.parse(localStorage.getItem("isShort"));
      const fullMoviesList = JSON.parse(localStorage.getItem("fullMoviesList"));
      setFullMovieList(fullMoviesList);
      displayMovies(fullMoviesList, {
        movieName,
        isShort,
      });
      setValues({
        movieName,
        isShort,
      });
    }
  }, []);

  const displayMovies = (movies, searchOptions) => {
    const { movieName, isShort } = searchOptions;
    const searchedResult = searchMovies(movies, movieName, isShort);
    const initialMoviesArray = searchedResult.slice(0, screen.initialMovies);
    setDisplayedMovies(initialMoviesArray);
    if (initialMoviesArray.length) {
      setFilteredMovies(searchedResult);
      setResponseMessage("");
      setIsFullMoviesCount(initialMoviesArray.length >= searchedResult.length);
    } else {
      setResponseMessage(MESSAGES.contentNotFound);
      setIsFullMoviesCount(true);
    }
  };

  const submitForm = handleSubmit(async () => {
    if (isValid) {
      setFormErrorText("");
      setResponseMessage("");
      try {
        setIsStartedSearch(true);
        const fullMoviesList = await onGetMovies(values);

        localStorage.setItem("fullMoviesList", JSON.stringify(fullMoviesList));
        localStorage.setItem("movieName", values.movieName);
        localStorage.setItem("isShort", values.isShort);

        setFullMovieList(fullMoviesList);
        displayMovies(fullMoviesList, {
          movieName: values.movieName,
          isShort: values.isShort,
        });
      } catch (err) {
        console.log(err);
        setDisplayedMovies([]);
        setResponseMessage(MESSAGES.contentSearchError);
      }
    } else {
      setFormErrorText(MESSAGES.searchNameError);
    }
  });

  const handleAddMoviesButtonClick = () => {
    const newMoviesCount = displayedMovies.length + screen.increaseMovies;
    setDisplayedMovies(filteredMovies.slice(0, newMoviesCount));
    setIsFullMoviesCount(newMoviesCount >= filteredMovies.length);
  };

  const handleCheckboxClick = (e) => {
    handleChange(e);
    displayMovies(fullMoviesList, {
      movieName: values.movieName,
      isShort: e.target.checked,
    });

    localStorage.setItem("isShort", e.target.checked);
    localStorage.setItem("movieName", values.movieName);
  };

  return (
    <section className="movies">
      <div className="movies__inner-container">
        <SearchForm
          name="movieName"
          onSubmit={submitForm}
          onChange={handleChange}
          value={values.movieName}
          formErrorText={formErrorText}
          required
        >
          <FilterCheckbox
            name="isShort"
            onChange={handleCheckboxClick}
            data={data.movies.checkbox}
            value={values.isShort}
            checked={values.isShort}
          />
        </SearchForm>
        {responseMessage && (
          <p className="section-text movies__response-text">
            {responseMessage}
          </p>
        )}
        {(isStartedSearch || displayedMovies.length > 0) &&
          (isLoading ? (
            <Preloader />
          ) : (
            <>
              <MoviesCardList
                savedMovies={savedMovies}
                onAddSavedMovie={onAddSavedMovie}
                onRemoveSavedMovie={onRemoveSavedMovie}
                data={displayedMovies}
              />
              {!isFullMoviesCount && (
                <Button
                  onClick={handleAddMoviesButtonClick}
                  ariaLabel="Загрузить еще контент"
                  type="submit"
                  className="movies__more-content-button"
                >
                  {data.movies.moreContentButton.name}
                </Button>
              )}
            </>
          ))}
      </div>
    </section>
  );
};

Movies.propTypes = {
  onGetMovies: PropTypes.func,
  onAddSavedMovie: PropTypes.func,
  onRemoveSavedMovie: PropTypes.func,
  savedMovies: PropTypes.array,
  isLoading: PropTypes.bool,
};
