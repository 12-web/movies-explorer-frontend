import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { data } from "../../assets/data/data";
import { FilterCheckbox } from "../../components/blocks/FilterCheckbox/FilterCheckbox";
import { MoviesCardList } from "../../components/blocks/MoviesCardList/MoviesCardList";
import Preloader from "../../components/blocks/Preloader/Preloader";
import { SearchForm } from "../../components/blocks/SearchForm/SearchForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useQueryResponse } from "../../hooks/useQueryResponse";
import { MESSAGES } from "../../utils/constants";
import { searchMovies } from "../../utils/utils";
import "../Movies/Movies.css";

export const SavedMovies = ({ savedMovies, onRemoveSavedMovie, isLoading }) => {
  const [displayedSavedMovies, setDisplayedSavedMovies] = useState([]);
  const [formErrorText, setFormErrorText] = useState("");
  useEffect(() => {
    setDisplayedSavedMovies(savedMovies);
  }, [savedMovies]);
  const { responseMessage, setResponseMessage } = useQueryResponse();

  const displayMovies = (movies, searchOptions) => {
    const { movieName, isShort } = searchOptions;

    const searchedResult = searchMovies(movies, movieName, isShort);

    if (searchedResult.length) {
      setDisplayedSavedMovies(searchedResult);
      setResponseMessage("");
    } else {
      setResponseMessage(MESSAGES.contentNotFound);
      setDisplayedSavedMovies([]);
    }
  };

  const { values, handleChange, handleSubmit, isValid } = useFormWithValidation(
    {
      movieName: "",
      isShort: false,
    }
  );

  const submitForm = handleSubmit(() => {
    if (isValid) {
      setFormErrorText("");
      displayMovies(savedMovies, {
        movieName: values.movieName,
        isShort: values.isShort,
      });
    } else {
      setFormErrorText(MESSAGES.searchNameError);
    }
  });

  const handleCheckboxChange = (e) => {
    handleChange(e);
    displayMovies(savedMovies, {
      movieName: values.movieName,
      isShort: e.target.checked,
    });
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
            onChange={handleCheckboxChange}
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
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            onRemoveSavedMovie={onRemoveSavedMovie}
            savedMovieDisplay={true}
            data={displayedSavedMovies}
          />
        )}
      </div>
    </section>
  );
};

SavedMovies.propTypes = {
  savedMovies: PropTypes.array,
  onRemoveSavedMovie: PropTypes.func,
  isLoading: PropTypes.bool,
};
