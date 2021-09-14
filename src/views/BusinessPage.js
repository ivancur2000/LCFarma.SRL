import React from "react";
import certificado from "../public/img/ImageFetchCertificacion.webp";
import "../public/css/business.css";

export const BusinessPage = () => {
  return (
    <>
      <div className="sticky title"></div>
      <div className="title">
        <h2>Desarollo de negocios</h2>
      </div>
      <p className="textHistory m-5">
        En LCPharma Bolivia estamos comprometidos con la satisfacción total de
        nuestros clientes mediante personal altamente competente, el servicio
        excelente y la mejora continua de nuestros procesos; siendo nuestra
        fortaleza la comercialización de productos especializados y la alta
        eficiencia de nuestro sistema de administración de calidad ISO
        9001:2008. Ser reconocidos como la empresa líder en la distribución de
        productos farmacéuticos de alta especialidad en Bolivia, por nuestra
        excelente calidad en servicio, surtido y precios. LCPharma está
        comprometida con el crecimiento continuo a través de adquisiciones, la
        adquisición de licencias de nuevos productos y la formación de
        asociaciones comerciales de beneficio mutuo. Contamos con un equipo
        profesional y bien practicado con un enfoque integrado en finanzas,
        legal y regulatorio. Comercializar medicamentos básicos y de alta
        especialidad a través de la asesoría profesional, la atención esmerada y
        el acercamiento con nuestros clientes. Nuestro quehacer se sustenta en
        personal altamente competitivo, la comunicación efectiva y el trabajo en
        equipo; proveyendo productos de más alta calidad. Impactamos
        positivamente a la sociedad llevando soluciones médicas para la salud de
        la población.
      </p>
      <div className="m-5">
        <h4>Certificaciones</h4>
        <div className="row">
          <div className="col-4">
            <div data-bs-toggle="modal" data-bs-target="#modalCertificade">
              <img
                src={certificado}
                alt="certificado"
                className="m-3 imageCert"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        tabIndex="-1"
        id="modalCertificade"
        aria-labelledby="modal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <img src={certificado} alt="certificado" className="modalImage m-auto" />
        </div>
      </div>
    </>
  );
};
