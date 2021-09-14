import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { Footer } from "./components/Footer";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import { SlideBar } from "./components/SlideBar";

export const LandingPage = () => {
  const { changeLanguage, handleOnChange } = useChangeLanguage();
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
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
      <Footer changeLanguage={changeLanguage} />
    </BrowserRouter>
  );
};
