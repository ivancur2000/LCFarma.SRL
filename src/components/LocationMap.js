import React from "react";

export const LocationMap = ({ changeLanguage, city, addressTran, address, phones, children }) => {
  return (
    <div className="my-3 container">
      <h4 className="text-center title-about"> {city}</h4>
      <div className="row mx-auto p-2 justify-content-center">
        <div className="col-md-5 mx-auto box-location">
          <h3>{changeLanguage ? "Address" : "Dirección"}</h3>
          <p>
            {changeLanguage
              ? addressTran
              : address}
          </p>
          <h3>{changeLanguage ? "Phones" : "Telefonos"}</h3>
          <p>{ phones }</p>
          <h3>
            {changeLanguage ? "Attention Schedule " : "Horarios de atención"}
          </h3>
          <p>
            {changeLanguage ? "Monday to Friday" : "Lunes a Viernes"} 8:00 - 18.30
          </p>
          <p>{changeLanguage ? "Saturday" : "Sabado"} 8:00 - 13:00 </p>
        </div>
        <div className="col-md-5 mx-auto">
          { children }
        </div>
      </div>
    </div>
  );
};
