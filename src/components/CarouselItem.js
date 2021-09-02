import React from "react";

export const CarouselItem = ({ img, active, changeLanguage }) => {
  return (
    <div
      className={`carousel-item ${active && "active"}`}
      data-bs-interval="2000"
    >
      <img
        src={img}
        alt="Imagen de LCFarma"
        className="d-block vw-100 vh-100"
      />
      <div className="carousel-caption m-2">
        <div className="row">
          <div className="col-md-4 item-caption1">
            <h5>{changeLanguage ? "US" : "Nosotros"}</h5>
            <p>
              {changeLanguage
                ? "We are highly qualified professionals with extensive experience in our respective fields."
                : "Somos profesionales altamente calificados con alta experiencia en nuestros respectivos campos."}
            </p>
          </div>
          <div className="col-md-4 item-caption2">
            <h5>{changeLanguage ? "Management" : "Gestión"}</h5>
            <p>
              {changeLanguage
                ? "Business ethics of LCPharma Bolivia promote higher levels of transparency and integrity."
                : "Ética empresaria de LCPharma Bolivia promover mayores niveles de transparencia e integridad"}
            </p>
          </div>
          <div className="col-md-4 item-caption3">
            <h5>{changeLanguage?'Quality':'Calidad'}</h5>
            <p>
              {
                changeLanguage
                ? 'An ISO 9001-2008 certificate that strictly follows industrial guidelines according to international standards'
                : 'Un certificado ISO 9001-2008 que sigue estrictamente las directrices industriales según las normas internacionales'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
