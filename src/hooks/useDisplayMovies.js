// import { useState } from "react";
// import { MESSAGES } from "../utils/constants";
// import { searchMovies } from "../utils/utils";
// import { useResize } from "./useResize";

// export const useDisplayMovies = () => {
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [displayedMovies, setDisplayedMovies] = useState([]);
//   const [isFullMoviesCount, setIsFullMoviesCount] = useState(false);
//   const { screen } = useResize();

//   const displayMovies = (movies, searchOptions) => {
//     const { movieName, isShort } = searchOptions;
//     const searchedResult = searchMovies(movies, movieName, isShort);
//     const initialMoviesArray = searchedResult.slice(0, screen.initialMovies);

//     setDisplayedMovies(initialMoviesArray);

//     if (!initialMoviesArray.length) {
//       setResponseMessage(MESSAGES.contentNotFound);
//       setIsFullMoviesCount(true);
//     } else {
//       setFilteredMovies(searchedResult);
//       setIsFullMoviesCount(initialMoviesArray.length >= searchedResult.length);
//       setResponseMessage("");
//     }
//   };

//   return {displayMovies, isFullMoviesCount, displayedMovies, filteredMovies}
// };
