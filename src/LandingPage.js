import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HashRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { Footer } from "./components/Footer";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import { AdminNavbar } from "./components/AdminNavbar";
import { AdminFooter } from "./components/AdminFooter";
import { ScrollToTop } from "./helpers/ScrollToTop";
import Aos from "aos";

import "aos/dist/aos.css";
import "./public/css/index.css";

export const LandingPage = () => {
  const { changeLanguage, handleOnChange } = useChangeLanguage();
  const token = localStorage.getItem("token");

  useEffect(() => {
    Aos.init();
  }, []);

  const handoOnBackUp = ()=>{
    window.scroll(0, 0);
  }

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
      <div className="row mx-0 my-3 justify-content-end">
        <button onClick={handoOnBackUp} className="btn btn-goUp col-2">
          {changeLanguage ? "Go back up" : "Volver arriba"}
        </button>
      </div>
      {!token ? <Footer changeLanguage={changeLanguage} /> : <AdminFooter />}
    </HashRouter>
  );
};
