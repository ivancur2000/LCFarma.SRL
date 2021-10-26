import React from "react";

export const LocationPage = ({ changeLanguage }) => {
  return (
    <>
      <div className="sticky title"></div>
      <div className="title">
        <h2>{changeLanguage ? "Location" : "Ubicación"}</h2>
      </div>
      <div className="my-3">
        <h4 className="text-center"> LA PAZ</h4>
        <div className="row mx-auto p-2">
          <div className="col-md-5 mx-auto">
            <h3>{changeLanguage ? "Address" : "Direccion"}</h3>
            <p>C/Luis Crespo No. 2019 esq. Aspiazu La Paz - Bolivia</p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>2 713644 | 2 713268 | 707 79387</p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atencion"}
            </h3>
            <p>{changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 - 18.30</p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 am - 13:00 </p>
          </div>
          <div className="col-md-7 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3188203310883!2d-68.13603788552177!3d-16.50999444535891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f207cf74ddbcd%3A0x5a06378f2de66072!2sLuis%20Crespo%202019%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1635208671537!5m2!1ses!2sbo"
              width="300"
              height="250"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-3">
        <h4 className="text-center">COCHABAMBA</h4>
        <div className="row mx-auto p-2">
          <div className="col-md-5 mx-auto">
            <h3>{changeLanguage ? "Address" : "Direccion"}</h3>
            <p>C/ Idelfonso Murguia No 516</p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>+591 72259459</p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atencion"}
            </h3>
            <p>{changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 - 18.30</p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 am - 13:00 </p>
          </div>
          <div className="col-md-7 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6572120680294!2d-66.1687380855048!3d-17.38022006857843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3746d43282f5b%3A0xc79f0957691b2a81!2sC.%20Idelfonso%20Murguia%2C%20Cochabamba!5e0!3m2!1ses!2sbo!4v1635209239706!5m2!1ses!2sbo"
              width="300"
              height="250"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-3">
        <h4 className="text-center">SANTA CRUZ</h4>
        <div className="row mx-auto p-2">
          <div className="col-md-5 mx-auto">
            <h3>{changeLanguage ? "Address" : "Direccion"}</h3>
            <p>C / Luis Crespo No. 2019 esq. Aspiazu La Paz, Bolivia</p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>69217031 </p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atencion"}
            </h3>
            <p>{changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 - 18.30</p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 am - 13:00 </p>
          </div>
          <div className="col-md-7 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8844331823757!2d-63.156270985497464!3d-17.750083678808533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e6356c2b7c49%3A0x9ea6f96418a0e598!2sAvenue%202%20De%20Agosto%20%26%20Calle%207%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses!2sbo!4v1635209102960!5m2!1ses!2sbo"
              width="300"
              height="250"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
