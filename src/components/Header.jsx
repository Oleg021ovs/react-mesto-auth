import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../images/logo.svg";
import NavBar from "./NavBar";
function Header({ handleSignOut, userData }) {
  return (
    <header className="header">
      <Link to="/" className="header__btn">
        <img className="header__logo" src={logo} alt="логотип" />
      </Link>

      <Routes>
        <Route
          path="/"
          element={<NavBar userData={userData} signOut={handleSignOut} />}
        />
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__btn-link">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__btn-link">
              Регистрация
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
