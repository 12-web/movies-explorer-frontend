import React, { useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { Movies } from "../../pages/Movies/Movies";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";
import { Profile } from "../../pages/Profile/Profile";
import { Register } from "../../pages/Register/Register";
import { SavedMovies } from "../../pages/SavedMovies/SavedMovies";
import { Header } from "../sections/Header/Header";
import { Footer } from "../sections/Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/mainApi";
import * as movies from "../../utils/moviesApi";
import { MESSAGES } from "../../utils/constants";
import { useEffect } from "react";
import { ProtectedRoute } from "../blocks/ProtectedRoute/ProtectedRoute";
import "../../vendor/normalize.css";
import "../../vendor/fonts/fonts.css";
import "../../variables/variables.css";
import "./App.css";

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [response, setResponse] = useState("");
  const [isErrorResponse, setIsErrorResponse] = useState(true);
  const [isFormModify, setIsFormModify] = useState(false);
  const [isFormBlocked, setIsFormBlocked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const listOfHeaderDisplayed = ["/", "/profile", "/movies", "/saved-movies"];
  const listOfFooterDisplayed = ["/", "/movies", "/saved-movies"];
  const isHeaderDisplayed = listOfHeaderDisplayed.includes(location.pathname);
  const isFooterDisplayed = listOfFooterDisplayed.includes(location.pathname);

  useEffect(() => {
    handleGetSavedMovies();
  }, [isLogged]);

  useEffect(() => {
    const isUserLogged = localStorage.getItem("isLogged");
    const fetchUserInfo = async () => {
      try {
        const user = await auth.getUserInfo();
        setIsLogged(true);
        setCurrentUser(user);
      } catch (err) {
        console.log(err);
      }
    };

    if (isUserLogged) {
      fetchUserInfo();
    }
  }, []);

  useEffect(() => {
    setResponse("");
    setIsFormModify(false);
  }, [location]);

  const handleSignUp = async (userData) => {
    try {
      const user = await auth.register(userData);
      const signin = await auth.authorize({
        email: userData.email,
        password: userData.password,
      });
      localStorage.setItem("isLogged", true);
      setCurrentUser(user);
      setIsLogged(true);

      navigate("/movies", { replace: true });
    } catch (err) {
      if (err === 409) {
        setResponse(MESSAGES.emailExistError);
      } else {
        setResponse(MESSAGES.registerError);
      }
    }
  };

  const handleSignIn = async (userData) => {
    try {
      setIsFormBlocked(true);
      await auth.authorize(userData);
      const user = await auth.getUserInfo();
      setCurrentUser(user);
      localStorage.setItem("isLogged", true);
      setIsLogged(true);

      navigate("/movies", { replace: true });
    } catch (err) {
      if (err === 401) {
        setResponse(MESSAGES.incorrectSignin);
      } else {
        setResponse(MESSAGES.serverError);
      }
    } finally {
      setIsFormBlocked(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signout();
      localStorage.clear();
      setIsLogged(false);

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProfile = async (userData) => {
    try {
      const user = await auth.editUserInfo(userData);
      setCurrentUser(user);
      setIsFormModify(false);
      setResponse(MESSAGES.successEditProfileMessage);
      setIsErrorResponse(false);
    } catch (err) {
      setIsErrorResponse(true);
      if (err === 409) {
        setResponse(MESSAGES.emailExistError);
      } else {
        setResponse(MESSAGES.profileError);
      }
    }
  };

  const handleGetMovies = async () => {
    try {
      setIsLoading(true);
      const result = await movies.getMovies();
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetSavedMovies = async () => {
    try {
      const result = await movies.getSavedMovies();
      setIsLoading(true);
      setSavedMovies(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSavedMovie = async (movie) => {
    try {
      const res = await movies.createSavedMovie(movie);
      setSavedMovies([...savedMovies, res]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveSavedMovie = async (id) => {
    try {
      await movies.deleteSavedMovie(id);
      setSavedMovies((movies) => movies.filter((movie) => movie._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`root ${isMenuOpened ? "root_blocked" : ""}`}>
        {isHeaderDisplayed && (
          <Header
            isLogged={isLogged}
            isMenuOpened={isMenuOpened}
            onChangeMenuOpenness={setIsMenuOpened}
          />
        )}

        <main className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  isLoading={isLoading}
                  onSignout={handleSignOut}
                  onRemoveSavedMovie={handleRemoveSavedMovie}
                  onAddSavedMovie={handleAddSavedMovie}
                  savedMovies={savedMovies}
                  onGetMovies={handleGetMovies}
                  isLogged={isLogged}
                  element={Movies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  isLoading={isLoading}
                  onRemoveSavedMovie={handleRemoveSavedMovie}
                  savedMovies={savedMovies}
                  isLogged={isLogged}
                  element={SavedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isFormModify={isFormModify}
                  onSetFormModifyStatus={setIsFormModify}
                  response={response}
                  isErrorResponse={isErrorResponse}
                  onEdit={handleEditProfile}
                  onSignout={handleSignOut}
                  isLogged={isLogged}
                  element={Profile}
                />
              }
            />
            <Route
              path="/signin"
              element={
                isLogged ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login
                    isFormBlocked={isFormBlocked}
                    onLogin={handleSignIn}
                    isErrorResponse={isErrorResponse}
                    response={response}
                  />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isLogged ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    isFormBlocked={isFormBlocked}
                    onRegister={handleSignUp}
                    isErrorResponse={isErrorResponse}
                    response={response}
                  />
                )
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        {isFooterDisplayed && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
