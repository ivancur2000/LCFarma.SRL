import React from "react";
import {GiHealthNormal} from "react-icons/gi";
export const ModalProduct = ({ img, changeLanguage }) => {
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="modal"
      aria-labelledby="modal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {changeLanguage ? "Producto en ingles" : "Producto"}
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
              <div className="col-md">
                <img src={img} alt="imagen" className="imgModal" />
              </div>
              <div className="col-md">
                <h1>{changeLanguage ? "Producto en ingles" : "Producto"}</h1>
                <p>
                  {changeLanguage
                    ? "Descripcion del producto en ingles"
                    : "Descripcion del producto"}
                </p>
              </div>
            </div>
            <div className="row text-center">
              <h3>
                {
                  changeLanguage
                  ? 'REACOMENDATIONS'
                  : 'RECOMENDACIONES'
                }
              </h3>
              <div className="row">
                <div className="col-md">
                  <GiHealthNormal />
                  <span>Esto es la cosa del producto</span>
                </div>
                <div className="col-md">icon asdasdadadada</div>
              </div>
              <div className="row">
                <div className="col-md">icon asdasdadadada</div>
                <div className="col-md">icon asdasdadadada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
