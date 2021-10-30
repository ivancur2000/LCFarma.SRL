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
            <h3>{changeLanguage ? "Address" : "Dirección"}</h3>
            <p>Av. Francia calle 21 No. 200 Zona Achumani</p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>2 713644 | 2 713268 | 707 79387</p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atención"}
            </h3>
            <p>
              {changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 -
              18.30
            </p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 am - 13:00 </p>
          </div>
          <div className="col-md-7 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.647453984152!2d-68.07916098552116!3d-16.54388654624084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21372dc5dd87%3A0x5799eabceb2740d!2sCalle%2021%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1635427913577!5m2!1ses!2sbo"
              width="300"
              height="250"
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
            <h3>{changeLanguage ? "Address" : "Dirección"}</h3>
            <p>C/ Idelfonso Murguia No 516</p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>+591 72259459</p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atención"}
            </h3>
            <p>
              {changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 -
              18.30
            </p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 am - 13:00 </p>
          </div>
          <div className="col-md-7 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6572120680294!2d-66.1687380855048!3d-17.38022006857843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3746d43282f5b%3A0xc79f0957691b2a81!2sC.%20Idelfonso%20Murguia%2C%20Cochabamba!5e0!3m2!1ses!2sbo!4v1635209239706!5m2!1ses!2sbo"
              width="300"
              height="250"
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
            <h3>{changeLanguage ? "Address" : "Dirección"}</h3>
            <p>Avenida 2 agosto calle #7 , lado sur</p>
            <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
            <p>69217031 </p>
            <h3>
              {changeLanguage ? "Attention Schedule " : "Horarios de atención"}
            </h3>
            <p>
              {changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 -
              18.30
            </p>
            <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 am - 13:00 </p>
          </div>
          <div className="col-md-7 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.9880526466181!2d-63.151953221969436!3d-17.83975503745221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e974123c4caf%3A0x21aae8cf735a017!2sAv.%202%20de%20Agosto%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses!2sbo!4v1635427826936!5m2!1ses!2sbo"
              width="300"
              height="250"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
