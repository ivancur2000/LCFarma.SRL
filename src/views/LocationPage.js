import React from "react";
import { FormContact } from "../components/FormContact";

import "../public/css/location.css";

export const LocationPage = ({ changeLanguage }) => {
  return (
    <>
      <div className="title mt-3">
        <h2 className="animate__animated animate__fadeInLeft">
          {changeLanguage ? "Location" : "Ubicación"}
        </h2>
      </div>
      <div className="my-3 container">
        <h4 className="text-center title-about"> LA PAZ</h4>
        <div className="row mx-auto p-2 justify-content-center">
          <div className="col-md-7 mx-auto box-location">
            <h3>{changeLanguage ? "Address" : "Dirección"}</h3>
            <p>
              {changeLanguage
                ? "#200 Achumani Ave. Francia, 21 Street"
                : "Av. Francia calle 21 No. 200 Zona Achumani"}
            </p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>2 713644 | 2 713268 | 707 79387</p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atención"}
            </h3>
            <p>
              {changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 -
              18.30
            </p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 - 13:00 </p>
          </div>
          <div className="col-md-5 mx-auto">
            <iframe
              title="mapa1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.96053742222!2d-68.07436608513547!3d-16.528089788598813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f218e6967caa9%3A0x11c2467b3094e8bc!2sJMLOGISTIC!5e0!3m2!1ses-419!2sbo!4v1635783106623!5m2!1ses-419!2sbo"
              className="my-2"
              width="350"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-3 container">
        <h4 className="text-center title-about"> COCHABAMBA</h4>
        <div className="row mx-auto p-2 justify-content-center">
          <div className="col-md-7 mx-auto box-location">
            <h3>{changeLanguage ? "Address" : "Dirección"}</h3>
            <p>
              {changeLanguage
                ? "#516 Idelfonso Murguia Street"
                : "C/ Idelfonso Murguia No 516"}
            </p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>+591 72259459</p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atención"}
            </h3>
            <p>
              {changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 -
              18.30
            </p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 - 13:00 </p>
          </div>
          <div className="col-md-5 mx-auto">
            <iframe
              title="mapa2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6572120680294!2d-66.1687380855048!3d-17.38022006857843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3746d43282f5b%3A0xc79f0957691b2a81!2sC.%20Idelfonso%20Murguia%2C%20Cochabamba!5e0!3m2!1ses!2sbo!4v1635209239706!5m2!1ses!2sbo"
              className="my-2"
              width="350"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-3 container">
        <h4 className="text-center title-about"> SANTA CRUZ</h4>
        <div className="row mx-auto p-2 justify-content-center">
          <div className="col-md-7 mx-auto box-location">
            <h3>{changeLanguage ? "Address" : "Dirección"}</h3>
            <p>
              {changeLanguage
                ? "Ave. 2 de Agosto, 7 Street, South side"
                : "Avenida 2 agosto calle #7 , lado sur"}
            </p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>69217031 </p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atención"}
            </h3>
            <p>
              {changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 -
              18.30
            </p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 - 13:00 </p>
          </div>
          <div className="col-md-5 mx-auto">
            <iframe
              title="mapa3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.9880526466181!2d-63.151953221969436!3d-17.83975503745221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e974123c4caf%3A0x21aae8cf735a017!2sAv.%202%20de%20Agosto%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses!2sbo!4v1635427826936!5m2!1ses!2sbo"
              className="my-2"
              width="350"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr />
      <FormContact changeLanguage={changeLanguage} />
    </>
  );
};
