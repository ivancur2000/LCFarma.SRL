import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../public/img/LOGO2.png";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { RiCellphoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

import "../public/css/footer.css";

export const Footer = ({ changeLanguage }) => {
  return (
    <footer className="text-center text-lg-start footer-header">
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
                  ? "LCFarma.SRL is a pharmaceutical distributor, with more than 8 years of experience in the national market, with offices in: La Paz, Cochabamba, Santa Cruz, Oruro, Potosí, Sucre, Tarija, Cobija"
                  : "LCFarma.SRL es una distribuidora farmacéutica, con más de 8 años de experiencia en el mercado nacional, con oficinas en: La Paz, Cochabamba, Santa Cruz, Oruro, Potosí, Sucre, Tarija, Cobija"}
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
                <AiFillHome className="me-1" />
                La Paz-Cochabamba-Santa Cruz-Oruro-Potosí-Sucre-Tarifa-Cobija
              </p>
              <p>
                <RiCellphoneFill className="me-1" />
                Cel: 70779387 (LP) - 60098699 (SC) - 72259459 (CB) - 67238330 (OR) - 71153927 (PT) - 71153927 (CH) - 77172947 (TJ) - 71259201 (PD)
              </p>
              <p>
                <AiFillPhone className="me-1" />
                {changeLanguage ? "Phone" : "Fono"}: (+591) 2713644 - 2713268
              </p>
              <p>
                <MdEmail className="me-1" />
                Email:
                administracion@lcpharmabolivia.com
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
