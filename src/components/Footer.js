import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../public/img/LOGO2.png";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { RiCellphoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
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
          <a
            className="me-4 text-reset"
            href="https://www.facebook.com/Distribuidora-LC-Farma-SRL-106545520952097"
            rel="noreferrer"
            target="_blank"
          >
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
                <Link to="/login" className="text-reset">
                  {changeLanguage ? "Login" : "Ingresar"}
                </Link>
              </p>
              <p>
                <Link className="text-reset" to="/termsCon">
                  {changeLanguage
                    ? "Terms and Conditions"
                    : "Términos y condiciones"}
                </Link>
              </p>
              <p>
                <Link className="text-reset" to="/catalogue">
                  {changeLanguage ? "Product catalog" : "Catálogo de productos"}
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4">
                {changeLanguage ? "Contact" : "Contacto"}
              </h6>
              <p>
                <AiFillHome className="me-3" />
                La Paz-Cochabamba-Santa Cruz
              </p>
              <p>
                <RiCellphoneFill className="me-3" />
                Cel: 707 79387
              </p>
              <p>
                <AiFillPhone className="me-3" />
                {changeLanguage ? "Phone" : "Fono"}: (+591) 2713644 - 2713268
              </p>
              <p>
                <MdEmail />
                Email:
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
