import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { Carousel } from "../components/Carousel";
import { AiOutlineMessage } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import {useHistory} from "react-router-dom";

import "../public/css/HomePage.css";

export const HomePage = ({ changeLanguage }) => {
  
  const token = localStorage.getItem('token');
  const history = useHistory();

  useEffect(()=>{
    if(token){
      history.push('/home');
    }
  }, [token,history])
  return (
    <>
      <Carousel changeLanguage={changeLanguage} />
      <div className="mb-5">
        <div className="animation">
          <h1 className="text-center p-2" data-aos="fade-up">
            {changeLanguage
              ? "OUR PRODUCTS AT THE SERVICE OF YOUR HEALTH"
              : "NUESTROS PRODUCTOS AL SERVICIO DE TU SALUD"}
          </h1>
        </div>
        <div className="text-center">
          <h4 className="titleHome">
            {changeLanguage
              ? "IN CASE YOU NEED MORE INFORMATION"
              : "EN CASO DE NECESITAR MAYOR INFORMACIÓN"}
          </h4>
          <div className="container">
            <div className="row w-100 justify-content-center">
              <div className="col-md-4 mx-0">
                <AiOutlineMessage className="iconHome" />
                <h1>{changeLanguage ? "Questions" : "Preguntas"}</h1>
                <p className='fs-6'>
                  {changeLanguage
                    ? "Send us your main questions, we are attentive to answer."
                    : "Envíanos tus principales dudas, estamos atentos a responder."}
                </p>
              </div>
              <div className="col-md-4 mx-5">
                <ImLocation className="iconHome" />
                <h1>{changeLanguage ? "Address" : "Direcciones"}</h1>
                <p className="fs-6">
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
  changeLanguage: PropTypes.bool.isRequired
}
