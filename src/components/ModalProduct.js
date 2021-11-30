import React from "react";
import { GiHealthNormal } from "react-icons/gi";
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";
import { Image } from "../components/Image";

export const ModalProduct = ({ name, changeLanguage, dataDoc }) => {
  const data = {
    img: dataDoc.img.arrayValue.values,
    prinActive: dataDoc.prinActive.arrayValue.values
      ? dataDoc.prinActive.arrayValue.values
      : [],
    prinActiveTran: dataDoc.prinActiveTran.arrayValue.values
      ? dataDoc.prinActiveTran.arrayValue.values
      : [],
    treatment: dataDoc.treatment.stringValue,
    treatmentTran: dataDoc.treatmentTran.stringValue,
    dosage: dataDoc.dosage.stringValue,
    dosageTran: dataDoc.dosageTran.stringValue,
  };

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id={name.replace(/ /g, "").replace(/ *\([^)]*\) */g, "")}
      aria-labelledby="modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {changeLanguage ? "Drug" : "Fármaco"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 m-auto row">
                <div className="w-100">
                  <div
                    id={`slider${name.replace(/ /g, "").replace(/ *\([^)]*\) */g, "")}`}
                    className="carousel carousel-dark mx-auto slide slideImg"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                  >
                    <div className="carousel-inner slideImg">
                      {data.img.map((imgString, index) => (
                        <div className={`carousel-item ${index === 0 && 'active slideImg'}`} key={index}>
                          <Image
                            name={name
                              .replace(/ /g, "")
                              .replace(/ *\([^)]*\) */g, "")}
                            imgString={imgString.stringValue}
                            className="imageProductModal2 mx-auto d-block"
                          />
                          <span>{index+1}/{data.img.length}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#slider${name.replace(/ /g, "").replace(/ *\([^)]*\) */g, "")}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                      />
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#slider${name.replace(/ /g, "").replace(/ *\([^)]*\) */g, "")}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <h1>{name}</h1>
                {data.prinActive.length > 0 && (
                  <div>
                    <h4>
                      {changeLanguage ? "Active principle" : "Principio Activo"}
                    </h4>
                    <div>
                      {changeLanguage
                        ? data.prinActiveTran.map((prin, index) => (
                            <p className="text-muted" key={index}>
                              {prin.stringValue}
                            </p>
                          ))
                        : data.prinActive.map((prin, index) => (
                            <p className="text-muted" key={index}>
                              {prin.stringValue}
                            </p>
                          ))}
                    </div>
                  </div>
                )}
                {data.treatment.trim() && (
                  <h4>
                    {changeLanguage ? "Treatment" : "Tratamiento"}
                    <p className="text-muted fs-6">
                      {changeLanguage ? data.treatmentTran : data.treatment}
                    </p>
                  </h4>
                )}
                {data.dosage.trim() && (
                  <h4>
                    {changeLanguage ? "Dosage" : "Dosificación"}
                    <p className="text-muted fs-6">
                      {changeLanguage ? data.dosageTran : data.dosage}
                    </p>
                  </h4>
                )}
              </div>
            </div>
            <div className="row text-center my-2">
              <h3>{changeLanguage ? "REACOMENDATIONS" : "RECOMENDACIONES"}</h3>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-2">
                    <AiOutlineHome className="iconProduct" />{" "}
                  </div>{" "}
                  <p className="text-left col-10">
                    {changeLanguage
                      ? "Keep out of the reach of children"
                      : "Mantener fuera del alcance de los niños"}
                  </p>
                </div>
              </div>
              <div className="col-md-6 my-2">
                <div className="row">
                  <div className="col-2">
                    <AiFillHeart className="iconProduct" />{" "}
                  </div>{" "}
                  <p className="text-left col-10">
                    {changeLanguage
                      ? "Take care of your health, do not self-medicate"
                      : "Cuide de su salud, no se automedique"}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-2">
                    <GiHealthNormal className="iconProduct" />{" "}
                  </div>{" "}
                  <p className="text-left col-10">
                    {changeLanguage
                      ? "Consult your doctor"
                      : "Consulte a su médico"}
                  </p>
                </div>
              </div>
              <div className="col-md-6 my-2">
                <div className="row">
                  <div className="col-2">
                    <FaTemperatureLow className="iconProduct" />
                  </div>{" "}
                  <p className="text-left col-10">
                    {changeLanguage
                      ? "Keep the drug at a temperature no higher than 25% centigrade, in a cool place protected from light and moisture"
                      : "Mantener el fármaco a una temperatura no mayor a los 25 % centígrados, en un lugar fresco protegido de la luz y humedad"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
