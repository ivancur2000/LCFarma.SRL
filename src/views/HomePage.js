import React from "react";
import { Carousel } from "../components/Carousel";
import {AiOutlineMessage} from 'react-icons/ai';
import {ImLocation} from 'react-icons/im';

import "../public/css/HomePage.css";

export const HomePage = ({ changeLanguage }) => {
  return (
    <>
      <Carousel changeLanguage={changeLanguage} />
      <div className="vh-100">
        <div className="animation">
          <h1 className="text-center p-2">
            {changeLanguage
              ? "OUR PRODUCTS AT THE SERVICE OF YOUR HEALTH"
              : "NUESTROS PRODUCTOS AL SERVICIO DE TU SALUD"}
          </h1>
        </div>
        <div className="text-center homePage">
          <h1>
            {changeLanguage
              ? "IN CASE YOU NEED MORE INFORMATION"
              : "EN CASO DE NECESITAR MAYOR INFORMACIÓN"}
          </h1>
          <div className="row">
            <div className="row-sm col-md-6">
              <AiOutlineMessage className='iconHome' />
              <h1>Preguntas</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, maiores.
              </p>
            </div>
            <div className="row-sm col-md-6">
              <ImLocation className='iconHome' />
              <h1>Direcciones</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, harum.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
