import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { AiOutlineMessage } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useHistory } from "react-router-dom";

import "../public/css/HomePage.css";

export const HomePage = ({ changeLanguage }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push("/home");
    }
  }, [token, history]);
  return (
    <>
      <Carousel changeLanguage={changeLanguage} />
      <div className="mb-5">
        <div className="animation">
          <h1 className="text-center p-2" data-aos="zoom-in">
            {changeLanguage
              ? "OUR PRODUCTS AT THE SERVICE OF YOUR HEALTH"
              : "NUESTROS PRODUCTOS AL SERVICIO DE TU SALUD"}
          </h1>
        </div>
        <div className="text-center mt-5">
          <h2 className="titleHome">
            {changeLanguage
              ? "IN CASE YOU NEED MORE INFORMATION"
              : "EN CASO DE NECESITAR MAYOR INFORMACIÓN"}
          </h2>
          <div className="container">
            <div className="row w-100 justify-content-center">
              <div className="col-md-4 mx-0">
                <AiOutlineMessage className="iconHome" />
                <Link className="home-title fs-4 d-block" to="/location">
                  {changeLanguage ? "Questions" : "Preguntas"}
                </Link>
                <p className="fs-6 parraf">
                  {changeLanguage
                    ? "Send us your main questions, we are attentive to answer."
                    : "Envíanos tus principales dudas, estamos atentos a responder."}
                </p>
              </div>
              <div className="col-md-4 mx-5">
                <ImLocation className="iconHome" />
                <Link className="home-title fs-4 d-block" to="/location">
                  {changeLanguage ? "Address" : "Direcciones"}
                </Link>
                <p className="fs-6 parraf">
                  {changeLanguage
                    ? "Do you need the address of our branches? We can help you"
                    : "Necesitas la dirección de nuestras sucursales? Podemos ayudarte"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
HomePage.propTypes = {
  changeLanguage: PropTypes.bool.isRequired,
};
