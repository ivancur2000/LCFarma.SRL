import React from "react";
import { useSetDataInfo } from "../../hooks/useSetDataInfo";
import { useUpdateInfo } from "../../hooks/useUpdateInfo";

export const InfoLcfarma = () => {
  const [info, handleOnChange, handleOnRestart] = useSetDataInfo();

  const [error, handleOnUpdate] = useUpdateInfo(info);
  console.log(info);

  return (
    <div>
      <div className="row m-0">
        <h1 className="text-center mt-2">Informacion general de la empresa</h1>
        {info.loading && <div className="mx-auto spinner-border"></div>}
      </div>
      <hr />
      <div className="container row mx-auto justify-content-center m-0">
        <div className="col-md-4">
          <h4>Mision</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="mision"
              id="mision"
              cols="30"
              rows="9"
              value={info.mision}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <div className="col-md-4">
          <h4>Vision</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="vision"
              id="vision"
              cols="30"
              rows="9"
              value={info.vision}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="container row mx-auto justify-content-center m-0">
        <div className="col-md-4">
          <h4>Mision traducion al ingles</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="misionTranslate"
              id="misionTranslate"
              cols="30"
              rows="9"
              value={info.misionTranslate}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <div className="col-md-4">
          <h4>Vision traducion al ingles</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="visionTranslate"
              id="visionTranslate"
              cols="30"
              rows="9"
              value={info.visionTranslate}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <h4>Valores</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="values"
            id="values"
            cols="30"
            rows="5"
            value={info.values}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <h4>Valores traducion al ingles</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="valuesTranslate"
            id="valuesTranslate"
            cols="30"
            rows="5"
            value={info.valuesTranslate}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <hr />
      <div className="container">
        <h4>Historia</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="history"
            id="history"
            cols="30"
            rows="20"
            value={info.history}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>

      <div className="container">
        <h4>Historia traducion al ingles</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="historyTranslate"
            id="historyTranslate"
            cols="30"
            rows="20"
            value={info.historyTranslate}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <h4>Desarollo de negocios</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="business"
            id="business"
            cols="30"
            rows="20"
            value={info.business}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>

      <div className="container">
        <h4>Desarollo de negocios traducion al ingles</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="businessTranslate"
            id="businessTranslate"
            cols="30"
            rows="20"
            value={info.businessTranslate}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <div className="row m-0">
        {info.loading && <div className="mx-auto spinner-border"></div>}
      </div>
      <div className="container row mx-auto justify-content-center p-3">
        <button
          onClick={handleOnUpdate}
          type="button"
          className="btn btn-success col-4"
        >
          Modificar
        </button>
        <button
          onClick={handleOnRestart}
          type="button"
          className="btn btn-danger col-4"
        >
          Limpiar
        </button>
      </div>
      {error.success !== "" ? (
        <div className="alert alert-success text-center">{error.success}</div>
      ) : (
        error.err !== "" && (
          <div className="alert alert-danger text-center">{error.err}</div>
        )
      )}
    </div>
  );
};
