import React, { useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { GiHealthNormal } from "react-icons/gi";
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";
import { db } from "../firebaseConfig";
import { Image } from "../components/Image";

export const ModalProduct = ({ name, changeLanguage }) => {
  const [data, setData] = useState({
    prinActive: [],
    prinActiveTran: [],
    dosage: "",
    dosageTran: "",
    treatment: "",
    treatmentTran: "",
    img: "",
  });

  useEffect(() => {
    const docRef = doc(db, "product", name);
    getDoc(docRef).then(({ _document }) => {
      const dataFetch = _document.data.value.mapValue.fields;
      setData({
        prinActive: dataFetch.prinActive.arrayValue.values
          ? dataFetch.prinActive.arrayValue.values
          : [],
        prinActiveTran: dataFetch.prinActiveTran.arrayValue.values
          ? dataFetch.prinActiveTran.arrayValue.values
          : [],
        dosage: dataFetch.dosage.stringValue,
        dosageTran: dataFetch.dosageTran.stringValue,
        treatment: dataFetch.treatment.stringValue,
        treatmentTran: dataFetch.treatmentTran.stringValue,
        img: dataFetch.img.stringValue,
      });
    });
  }, [name]);

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
              {changeLanguage ? "Drug" : "Farmaco"}
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
              <div className="col-md-6 m-auto">
                <Image imgString={data.img} className="imageProduct" />
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
                <p className="text-left">
                  <AiOutlineHome className="iconProduct" />{" "}
                  {changeLanguage
                    ? "Keep out of the reach of children"
                    : "Mantener fuera del alcance de los niños"}
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-left">
                  <AiFillHeart className="iconProduct" />{" "}
                  {changeLanguage
                    ? "Take care of your health, do not self-medicate"
                    : "Cuide de su salud, no se automedique"}
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-left">
                  <GiHealthNormal className="iconProduct" />{" "}
                  {changeLanguage
                    ? "Consult your doctor"
                    : "Consulte a su médico"}
                </p>
              </div>
              <div className="col-md-6">
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
