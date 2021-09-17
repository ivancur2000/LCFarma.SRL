import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { Footer } from "./components/Footer";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import { SlideBar } from "./components/SlideBar";
import { ScrollToTop } from "./helpers/ScrollToTop";

export const LandingPage = () => {
  const { changeLanguage, handleOnChange } = useChangeLanguage();
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <ScrollToTop />
      {token ? (
        <SlideBar />
      ) : (
        <>
          <Navbar
            handleOnChange={handleOnChange}
            changeLanguage={changeLanguage}
          />
        </>
      )}
      <Routes changeLanguage={changeLanguage} />
      {!token && <Footer changeLanguage={changeLanguage} />}
    </BrowserRouter>
  );
};
