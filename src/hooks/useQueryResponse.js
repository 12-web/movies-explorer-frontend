import { useState } from "react";

export const useQueryResponse = () => {
  const [isStartedSearch, setIsStartedSearch] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const displayResponseError = (isTruthy, text) => {
    if (isTruthy) {
      setResponseMessage(text);
    } else setResponseMessage("");
  };
  return {
    isStartedSearch,
    setIsStartedSearch,
    responseMessage,
    setResponseMessage,
    displayResponseError,
  };
};
