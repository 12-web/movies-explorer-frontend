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
import { filterMovies, searchMovies } from "../../utils/utils";
import { useQueryResponse } from "../../hooks/useQueryResponse";
import "./Movies.css";
import { MESSAGES } from "../../utils/constants";

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
  const [searchedMovies, setSearchedMovies] = useState([]);
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
      const searchedMovies = JSON.parse(localStorage.getItem("searchedMovies"));
      const displayedMovies = JSON.parse(
        localStorage.getItem("displayedMovies")
      );
      const filteredMovies = JSON.parse(localStorage.getItem("filteredMovies"));
      setSearchedMovies(searchedMovies);
      setFilteredMovies(filteredMovies);
      setDisplayedMovies(displayedMovies);
      setIsFullMoviesCount(searchedMovies >= displayedMovies);
      setValues({
        movieName: movieName,
        isShort: isShort,
      });
    }
  }, []);

  const submitForm = handleSubmit(async () => {
    if (isValid) {
      setFormErrorText("");
      setResponseMessage("");
      try {
        setIsStartedSearch(true);
        const fullMoviesList = await onGetMovies(values);
        const searchedResult = searchMovies(fullMoviesList, values.movieName);
        const filteredResult = filterMovies(searchedResult, values.isShort);
        const initialMoviesArray = filteredResult.slice(
          0,
          screen.initialMovies
        );
        setDisplayedMovies(initialMoviesArray);

        if (!initialMoviesArray.length) {
          setResponseMessage(MESSAGES.contentNotFound);
          setIsFullMoviesCount(true);
        } else {
          setSearchedMovies(searchedResult);
          setFilteredMovies(filteredResult);
          setIsFullMoviesCount(
            initialMoviesArray.length >= filteredResult.length
          );

          localStorage.setItem(
            "filteredMovies",
            JSON.stringify(filteredResult)
          );
          localStorage.setItem(
            "displayedMovies",
            JSON.stringify(initialMoviesArray)
          );
          localStorage.setItem(
            "searchedMovies",
            JSON.stringify(searchedResult)
          );
          localStorage.setItem("movieName", values.movieName);
          localStorage.setItem("isShort", values.isShort);
        }
      } catch (err) {
        console.log(err);
        setDisplayedMovies([]);
        setResponseMessage(MESSAGES.contentSearchError);
      }
    } else {
      setFormErrorText(MESSAGES.searchNameError);
    }
  });

  const handleFilterShortMovies = (checked) => {
    if (displayedMovies.length) {
      const filteredResult = filterMovies(searchedMovies, checked);
      const initialMoviesArray = filteredResult.slice(0, screen.initialMovies);
      if (filteredResult.length) {
        setResponseMessage("");
        setFilteredMovies(filteredResult);
        setDisplayedMovies(initialMoviesArray);
        setIsFullMoviesCount(
          initialMoviesArray.length >= filteredResult.length
        );

        localStorage.setItem("filteredMovies", JSON.stringify(filteredResult));
        localStorage.setItem("isShort", checked);
        localStorage.setItem(
          "displayedMovies",
          JSON.stringify(initialMoviesArray)
        );
      } else {
        setResponseMessage(MESSAGES.contentNotFound);
        setDisplayedMovies([]);
        setIsFullMoviesCount(true);
      }
    }
  };

  const handleAddMoviesButtonClick = () => {
    const newMoviesCount = displayedMovies.length + screen.increaseMovies;
    setDisplayedMovies(filteredMovies.slice(0, newMoviesCount));
    setIsFullMoviesCount(newMoviesCount >= searchedMovies.length);
  };

  const handleCheckboxClick = (e) => {
    handleChange(e);
    handleFilterShortMovies(e.target.checked);
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
