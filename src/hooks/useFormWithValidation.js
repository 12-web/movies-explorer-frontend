import { useCallback, useState } from "react";
import validator from "validator";
import { MESSAGES } from "../utils/constants";

export const useForm = (defaultValues = {}) => {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(values);
  };

  return { values, handleChange, handleSubmit, setValues };
};

export const useFormWithValidation = (defaultValues = {}) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if (name === "name") {
      target.validity.patternMismatch
        ? target.setCustomValidity(MESSAGES.incorrectName)
        : target.setCustomValidity("");
    }

    if (name === "email") {
      validator.isEmail(value)
        ? target.setCustomValidity("")
        : target.setCustomValidity(MESSAGES.incorrectEmail);
    }

    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: target.validationMessage,
    });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(values);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    isValid,
    values,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
    setValues,
  };
};
