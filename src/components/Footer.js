import React from "react";
import PropTypes from "prop-types";
import { Login } from "../views/Login";
import logo from "../public/img/LOGO2.webp";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

import "../public/css/footer.css";

export const Footer = ({ changeLanguage }) => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <span className="me-5 d-none d-lg-block">
          {changeLanguage
            ? "Contact us with our social networks"
            : "Contáctanos con nuestas redes sociales:"}
        </span>
        <div>
          <a className="me-4 text-reset" href="/#">
            <FaFacebook />
          </a>
          <a className="me-4 text-reset" href="/#">
            <FaTwitter />
          </a>
          <a className="me-4 text-reset" href="/#">
            <FaInstagram />
          </a>
          <a className="me-4 text-reset" href="/#">
            <FaGoogle />
          </a>
          <a className="me-4 text-reset" href="/#">
            <FaLinkedin />
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                <img src={logo} className="logoFooter" alt="logo lCFarm" />
                Farma.SRL
              </h6>
              <p>
                {changeLanguage
                  ? "LCFarma.SRL is a pharmaceutical distributor, with more than 8 years of experience in the market, having offices in 3 departments: La Paz, Cochabamba, Santa Cruz"
                  : "LCFarma.SRL es una distribuidora farmacéutica, con más de 8 años de experiencia en el mercado teniendo oficinas en 3 deperartamentos: La Paz, Cochabamba, Santa Cruz"}
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                {changeLanguage ? "About:" : "Acerca de:"}
              </h6>
              <p>
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                >
                  {changeLanguage ? "Login" : "Ingresar"}
                </button>
              </p>
              <Login />
              <p>
                <a className="text-reset" href="/#">
                  {changeLanguage
                    ? "Terms and Conditions"
                    : "Términos y condiciones"}
                </a>
              </p>
              <p>
                <a className="text-reset" href="/#">
                  {changeLanguage ? "Product catalog" : "Catálogo de productos"}
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4">
                {changeLanguage ? "Contact" : "Contacto"}
              </h6>
              <p>
                <i className="fas fa-home me-3"></i>La Paz-Cochabamba-Santa Cruz
              </p>
              <p>
                <i className="fas fa-mobile me-3"></i>Cel: 707 79387
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>
                {changeLanguage ? "Phone" : "Fono"}: (+591) 2713644 - 2713268
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>Email:
                gerenciageneral@lcpharmabolivia.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4 footer">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="/#">
          LCFarma.SRL
        </a>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  changeLanguage: PropTypes.bool.isRequired,
};
