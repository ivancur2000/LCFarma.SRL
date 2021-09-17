import React from "react";
import logo from "../public/img/LOGO2.png";
import englishIcon from "../public/img/united-states.png";
import spanishIcon from "../public/img/spain.png";
import { Link } from "react-router-dom";
import {useGetScroll} from "../hooks/useGetScroll";

import "../public/css/navbar.css";


export const Navbar = ({ changeLanguage, handleOnChange }) => {

  const scroll = useGetScroll();

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-dark text-center ${
        scroll<=150?'opacityOn':
        scroll>150&&'opacityOf'
      }` 
    }>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
          Farma.SRL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                {changeLanguage ? `Home` : `Inicio`}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/aboutus">
                {changeLanguage ? "About Us" : `Sobre nosotros`}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/catalogue">
                {changeLanguage ? "Catalogue" : "Catálogo"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/business">
                {changeLanguage
                  ? "Business Development"
                  : "Desarrollo de negocios"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/location">
                {changeLanguage ? "Location" : "Ubicación"}
              </Link>
            </li>
          </ul>
          <div className="d-flex form-check form-switch">
            <input
              type="checkbox"
              name=""
              id="language"
              className="form-check-input"
              onClick={(e) => handleOnChange(e)}
            />
            {changeLanguage ? (
              <label
                htmlFor="language"
                className="form-check-label mx-2 animate__animated animate__fadeInRight"
              >
                EN
                <img src={englishIcon} alt="English Icon" className="icon " />
              </label>
            ) : (
              <label
                htmlFor="language"
                className="form-check-label mx-2 animate__animated animate__fadeInLeft"
              >
                ES
                <img src={spanishIcon} alt="Spanish Icon" className="icon " />
              </label>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
