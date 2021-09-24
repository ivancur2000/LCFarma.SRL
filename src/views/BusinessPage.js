import React from "react";
import certificado from "../public/img/ImageFetchCertificacion.jpg";
import "../public/css/business.css";
import { useSetDataInfo } from "../hooks/useSetDataInfo";

export const BusinessPage = ({ changeLanguage }) => {
  const [info] = useSetDataInfo();
  return (
    <>
      <div className="sticky title"></div>
      <div className="title">
        <h2>
          {changeLanguage ? "Business development" : "Desarollo de Negocios"}
        </h2>
      </div>
      {info.loading && (
        <div className="row">
          <div className="spinner-grow m-auto"></div>
        </div>
      )}
      <p className="textHistory m-5">
        {changeLanguage ? info.businessTranslate : info.business}
      </p>
      <div className="m-5">
        <h4>{changeLanguage ? "Certificates" : "Certificados"}</h4>
        <div className="row">
          <div className="col-4">
            <div data-bs-toggle="modal" data-bs-target="#modalCertificade">
              <img
                src={certificado}
                alt="certificado"
                className="m-3 imageCert"
              />
            </div>
            <div
              className="modal fade"
              tabIndex="-1"
              id="modalCertificade"
              aria-labelledby="modal"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <img
                  src={certificado}
                  alt="certificado"
                  className="modalImage m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
