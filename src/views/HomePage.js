import React from "react";
import PropTypes from 'prop-types';
import { Carousel } from "../components/Carousel";
import { AiOutlineMessage } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

import "../public/css/HomePage.css";

export const HomePage = ({ changeLanguage }) => {
  return (
    <>
      <Carousel changeLanguage={changeLanguage} />
      <div className="mb-5">
        <div className="animation">
          <h1 className="text-center p-2">
            {changeLanguage
              ? "OUR PRODUCTS AT THE SERVICE OF YOUR HEALTH"
              : "NUESTROS PRODUCTOS AL SERVICIO DE TU SALUD"}
          </h1>
        </div>
        <div className="text-center">
          <h1>
            {changeLanguage
              ? "IN CASE YOU NEED MORE INFORMATION"
              : "EN CASO DE NECESITAR MAYOR INFORMACIÓN"}
          </h1>
          <div className="row w-100 text-center">
            <div className="row-sm w-sm-75 w-md-50 col-md-6">
              <AiOutlineMessage className="iconHome" />
              <h1>{changeLanguage ? "Questions" : "Preguntas"}</h1>
              <p className='fs-4'>
                {changeLanguage
                  ? "Send us your main questions, we are attentive to answer."
                  : "Envíanos tus principales dudas, estamos atentos a responder."}
              </p>
            </div>
            <div className="row-sm col-md-6">
              <ImLocation className="iconHome" />
              <h1>{changeLanguage ? "Address" : "Direcciones"}</h1>
              <p className="fs-4">
                {changeLanguage
                  ? "Do you need the address of our branches? We can help you"
                  : "Necesitas la dirección de nuestras sucursales? Podemos ayudarte"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
HomePage.propTypes = {
  changeLanguage: PropTypes.bool.isRequired
}