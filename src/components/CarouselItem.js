import React from 'react';
import PropTypes from "prop-types";

export const CarouselItem = ({ img, active, changeLanguage }) => {
  return (
    <div className={`carousel-item ${active && "active"}`}>
      <img
        src={img}
        alt="Imagen de LCFarma"
        className="d-block vw-100 imgCarousel"
      />
      <div className="carousel-caption m-2">
        <div className="row justify-content-center">
          <div className="col-md-3 item-caption1">
            <h5>{changeLanguage ? "US" : "Nosotros"}</h5>
            <p>
              {changeLanguage
                ? "We are qualified professionals with high experience in our respective areas."
                : "Somos profesionales calificados y con alta experiencia en nuestras respectivas áreas."}
            </p>
          </div>
          <div className="col-md-3 item-caption2">
            <h5>{changeLanguage ? "Management" : "Gestión"}</h5>
            <p>
              {changeLanguage
                ? "Business ethics of LCPharma Bolivia promoting higher levels of transparency and integrity"
                : "Ética empresarial que promueve la atención a todos nuestros clientes  con integridad y en altos niveles de transparencia."}
            </p>
          </div>
          <div className="col-md-3 item-caption3">
            <h5>{changeLanguage ? "Quality" : "Calidad"}</h5>
            <p>
              {changeLanguage
                ? "We have the ISO 9001-2008 CERTIFICATION."
                : "Contamos con la CERTIFICACIÓN ISO 9001-2008."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  img: PropTypes.string.isRequired,
  changeLanguage: PropTypes.bool.isRequired,
};
