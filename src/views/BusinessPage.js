import React from "react";
import "../public/css/business.css";
import { useSetDataInfo } from "../hooks/useSetDataInfo";
import { useGetImages } from "../hooks/useGetImages";

export const BusinessPage = ({ changeLanguage }) => {
  const [info] = useSetDataInfo();
  const [url, loading] = useGetImages();

  return (
    <>
      <div className="title mt-3">
        <h2 className="animate__animated animate__fadeInLeft">
          {changeLanguage ? "Business development" : "Desarollo de Negocios"}
        </h2>
      </div>
      {info.loading && (
        <div className="row">
          <div className="spinner-grow m-auto"></div>
        </div>
      )}
      <p className="textHistory multiLineText m-5">
        {changeLanguage ? info.businessTranslate : info.business}
      </p>
      <div className="m-5">
        <h4>{changeLanguage ? "Certificates" : "Certificados"}</h4>
        <div className="row w-100">
          {loading && (
            <div className="row">
              <div className="spinner-grow m-auto"></div>
            </div>
          )}
          {url.map((img, index) => (
            <div key={index} className="col-md-4 text-center w-100">
              <div data-bs-toggle="modal" data-bs-target={`#img${index}`}>
                <img
                  src={img.urlDir}
                  alt="certificado"
                  className="m-3 imageCert"
                />
              </div>
              <div
                className="modal fade"
                tabIndex="-1"
                id={`img${index}`}
                aria-labelledby="modal"
              >
                <div className="modal-dialog">
                  <img
                    src={img.urlDir}
                    alt="certificado"
                    className="modalImage m-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
