import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import { data } from "../../assets/data/data";
import "../../variables/variables.css";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <Header data={data.header} />
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
      <Footer data={data.footer} />
    </div>
  );
};

export default App;
