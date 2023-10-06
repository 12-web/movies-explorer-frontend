import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { Movies } from "../../pages/Movies/Movies";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";
import { Profile } from "../../pages/Profile/Profile";
import { Register } from "../../pages/Register/Register";
import { SavedMovies } from "../../pages/SavedMovies/SavedMovies";
import "../../vendor/normalize.css";
import "../../vendor/fonts/fonts.css";
import { Header } from "../sections/Header/Header";
import { Footer } from "../sections/Footer/Footer";
import "../../variables/variables.css";
import "./App.css";

const App = () => {
  const location = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const listOfHeaderDisplayed = ["/", "/profile", "/movies", "/saved-movies"];
  const listOfFooterDisplayed = ["/", "/movies", "/saved-movies"];
  const isHeaderDisplayed = listOfHeaderDisplayed.includes(location.pathname);
  const isFooterDisplayed = listOfFooterDisplayed.includes(location.pathname);

  return (
    <div className={`root ${isMenuOpened ? "root_blocked" : ""}`}>
      {isHeaderDisplayed ? (
        <Header
          isMenuOpened={isMenuOpened}
          onChangeMenuOpenness={setIsMenuOpened}
        />
      ) : (
        ""
      )}
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {isFooterDisplayed ? <Footer /> : ""}
    </div>
  );
};

export default App;
