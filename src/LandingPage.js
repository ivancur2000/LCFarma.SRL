import React from "react";
import { Navbar } from "./components/Navbar";
import { HashRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { Footer } from "./components/Footer";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import { AdminNavbar } from "./components/AdminNavbar";
import { AdminFooter } from "./components/AdminFooter";
import { ScrollToTop } from "./helpers/ScrollToTop";

export const LandingPage = () => {
  const { changeLanguage, handleOnChange } = useChangeLanguage();
  const token = localStorage.getItem("token");

  return (
    <HashRouter>
      <ScrollToTop />
      {token ? (
        <AdminNavbar />
      ) : (
        <Navbar
          handleOnChange={handleOnChange}
          changeLanguage={changeLanguage}
        />
      )}
      <Routes changeLanguage={changeLanguage} />
      {!token ? <Footer changeLanguage={changeLanguage} /> : <AdminFooter />}
    </HashRouter>
  );
};
