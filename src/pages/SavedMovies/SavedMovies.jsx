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
import { filterMovies, searchMovies } from "../../utils/utils";
import "../Movies/Movies.css";

export const SavedMovies = ({ savedMovies, onRemoveSavedMovie, isLoading }) => {
  const [displayedSavedMovies, setDisplayedSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [formErrorText, setFormErrorText] = useState("");
  useEffect(() => {
    setDisplayedSavedMovies(savedMovies);
    setFilteredSavedMovies(savedMovies);
  }, [savedMovies]);
  const { responseMessage, setResponseMessage, displayResponseError } =
    useQueryResponse();

  const { values, handleChange, handleSubmit, isValid } = useFormWithValidation(
    {
      movieName: "",
      isShort: false,
    }
  );

  const submitForm = handleSubmit(() => {
    if (isValid) {
      setFormErrorText("");
      const searchedResult = searchMovies(savedMovies, values.movieName);
      if (searchedResult.length) {
        const filteredResult = filterMovies(searchedResult, values.isShort);
        setFilteredSavedMovies(searchedResult);
        setDisplayedSavedMovies(filteredResult);
      } else {
        setDisplayedSavedMovies([]);
      }

      displayResponseError(!searchedResult.length, MESSAGES.contentNotFound);
    } else {
      setFormErrorText(MESSAGES.searchNameError);
    }
  });

  const handleCheckboxChange = (e) => {
    handleChange(e);
    if (e.target.checked) {
      const filteredResult = filterMovies(
        displayedSavedMovies,
        e.target.checked
      );
      displayResponseError(!filteredResult.length, MESSAGES.contentNotFound);
      setDisplayedSavedMovies(filteredResult);
    } else {
      if (displayedSavedMovies.length) {
        setResponseMessage("");
        setDisplayedSavedMovies(filteredSavedMovies);
      }
    }
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
