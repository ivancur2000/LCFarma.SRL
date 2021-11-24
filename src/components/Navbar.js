import React from "react";
import logo from "../public/img/LOGO2.png";
import englishIcon from "../public/img/united-states.png";
import spanishIcon from "../public/img/spain.png";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGetWithScreen } from "../hooks/useGetWidthScreen";

import "../public/css/navbar.css";

export const Navbar = ({ changeLanguage, handleOnChange }) => {
  const screen = useGetWithScreen();

  return (
    <>
      <div className="navbar-header max-vw-100">
        <div className="container p-3">
          <div className="row justify-content-center w-100">
            <Link
              className={`brand-header ${screen < 990 ? "col-8" : "col-4"}`}
              to="/"
            >
              <div className="row align-items-end w-100">
                <img src={logo} alt="Logo" className="logo col-4" />
                <span className={screen < 480 ? "col-3" : "col"}>
                  <span className="navbar-title">FARMA </span>
                  <span className="navbar-subtitle">S.R.L</span>
                </span>
              </div>
            </Link>

            <div
              className={`col-5 text-light navbar-info ${
                screen < 990 && "visually-hidden"
              } `}
            >
              <p>
                <AiOutlineMail className="me-1" />
                Email: administracion@lcpharmabolivia.com
              </p>
              <p>
                <ImLocation className="me-1" />
                La Paz - Cochabamba - Santa Cruz - Oruro - Potosí - Sucre - Tarija - Cobija
              </p>
            </div>

            <div className={`row ${screen < 990 ? "col" : "col-2"}`}>
              <div
                className={`d-flex form-check form-switch ${
                  screen < 790 ? "col-12" : "col"
                }`}
              >
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
                    <img
                      src={englishIcon}
                      alt="English Icon"
                      className="icon "
                    />
                  </label>
                ) : (
                  <label
                    htmlFor="language"
                    className="form-check-label mx-2 animate__animated animate__fadeInLeft"
                  >
                    ES
                    <img
                      src={spanishIcon}
                      alt="Spanish Icon"
                      className="icon "
                    />
                  </label>
                )}
              </div>
              <a
                className={`text-light btn-navbar fs-1 ${
                  screen > 990 && "visually-hidden"
                } ${screen < 790 ? "col-12" : "col"}`}
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Menú de navegación"
                href="/"
              >
                <GiHamburgerMenu className="mx-auto icon-btn-navbar" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark max-vw-100 ${
          screen < 990 ? "navbar-min-screen" : "navbar-max-screen"
        }`}
      >
        <div className="navbar-content mx-auto">
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <span
                    data-bs-toggle={screen < 990 && 'collapse'}
                    data-bs-target={screen < 990 && '#navbarContent'}
                    aria-controls={screen < 990 && 'navbarContent'}
                  >
                    {changeLanguage ? `HOME` : `INICIO`}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/aboutus">
                  <span
                    data-bs-toggle={screen < 990 && 'collapse'}
                    data-bs-target={screen < 990 && '#navbarContent'}
                    aria-controls={screen < 990 && 'navbarContent'}
                  >
                    {changeLanguage ? "ABOUT US" : `SOBRE NOSOTROS`}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/catalogue">
                  <span
                    data-bs-toggle={screen < 990 && 'collapse'}
                    data-bs-target={screen < 990 && '#navbarContent'}
                    aria-controls={screen < 990 && 'navbarContent'}
                  >
                    {changeLanguage ? "CATALOGE" : "CATÁLOGO"}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  <span
                    data-bs-toggle={screen < 990 && 'collapse'}
                    data-bs-target={screen < 990 && '#navbarContent'}
                    aria-controls={screen < 990 && 'navbarContent'}
                  >
                    {changeLanguage
                      ? "BUSINESS DEVELOPMENT"
                      : "DESARROLLO DE NEGOCIOS"}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/location">
                  <span
                    data-bs-toggle={screen < 990 && 'collapse'}
                    data-bs-target={screen < 990 && '#navbarContent'}
                    aria-controls={screen < 990 && 'navbarContent'}
                  >
                    {changeLanguage ? "LOCATION" : "UBICACIÓN"}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
