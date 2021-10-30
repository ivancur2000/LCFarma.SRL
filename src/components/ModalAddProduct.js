import React from "react";
import { useAddProducts } from "../helpers/addProducts";

export const ModalAddProduct = () => {

  const {
    form,
    handleOnAdd,
    handleOnAddTran,
    handleOnChange,
    handleOnFile,
    handleOnRemove,
    handleOnRemoveTran,
    handleOnSubmit
  } = useAddProducts();

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="addProduct"
      aria-labelledby="modal"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Nuevo Fármaco</h5>
            <button
              aria-label="close"
              className="btn-close"
              data-bs-dismiss="modal"
              type="button"
            ></button>
          </div>
          <div className="modal-body">
            <form
              className="container"
              onSubmit={(event) => handleOnSubmit(event)}
            >
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Nombre del producto:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="img">Imagen</label>
                <input
                  type="file"
                  className="form-control"
                  name="img"
                  id="img"
                  onChange={handleOnFile}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="textActive">
                  Principio activo
                </label>
                {form.prinActive.map((act, index) => (
                  <p className="text-muted" key={index}>
                    {act}
                    <button
                      type="button"
                      onClick={() => handleOnRemove(act)}
                      className="btn-close"
                    ></button>
                  </p>
                ))}
                <div className="input-group">
                  <input
                    type="text"
                    name="textActive"
                    id="textActive"
                    className="form-control"
                    value={form.textActive}
                    onChange={handleOnChange}
                  />
                  <button
                    type="button"
                    onClick={handleOnAdd}
                    className="btn btn-outline-secondary"
                  >
                    Agregar
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="textActiveTran">
                  Principio activo Traducción
                </label>
                {form.prinActiveTran.map((act, index) => (
                  <p className="text-muted" key={index}>
                    {act}
                    <button
                      onClick={() => handleOnRemoveTran(act)}
                      className="btn-close"
                    ></button>
                  </p>
                ))}
                <div className="input-group">
                  <input
                    type="text"
                    name="textActiveTran"
                    id="textActiveTran"
                    className="form-control"
                    value={form.textActiveTran}
                    onChange={handleOnChange}
                  />
                  <button
                    type="button"
                    onClick={handleOnAddTran}
                    className="btn btn-outline-secondary"
                  >
                    Agregar
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="treatment" className="form-label">
                  Tratamiento
                </label>
                <input
                  type="text"
                  name="treatment"
                  id="treatment"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="treatmentTran" className="form-label">
                  Tratamiento Traducción
                </label>
                <input
                  type="text"
                  name="treatmentTran"
                  id="treatmentTran"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="treatment" className="form-label">
                  Dosificación
                </label>
                <input
                  type="text"
                  name="dosage"
                  id="dosage"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="treatmentTran" className="form-label">
                  Dosificación Traducción
                </label>
                <input
                  type="text"
                  name="dosageTran"
                  id="dosageTran"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="my-3">
                <p className="text-danger">
                  { form.error }
                </p>
                <p className="text-success">
                  { form.success }
                </p>
              </div>
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
              <button
                aria-label="close"
                className="btn btn-danger mx-2"
                data-bs-dismiss="modal"
                type="button"
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
