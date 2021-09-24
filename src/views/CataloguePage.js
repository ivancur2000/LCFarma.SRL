import React from "react";
import { ModalProduct } from "../components/ModalProduct";
import farmaco from "../public/img/farmaco.jpg";

export const CataloguePage = ({ changeLanguage }) => {
  return (
    <>
      <div className="sticky title"></div>
      <div className="title">
        <h2>{changeLanguage ? "Catalogue" : "Catalógo"}</h2>
      </div>
      <div className="my-5">
        <div className="row w-100">
          <div className="col mx-5">
            <img src={farmaco} alt="farmaco" className="img-thumbail" />
            <h4 className="fs-5 fw-bold">Nombre del farmaco</h4>
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              {changeLanguage ? "See more" : "Ver más"}
            </button>
          </div>
        </div>
        <ModalProduct img={farmaco} />
      </div>
    </>
  );
};
