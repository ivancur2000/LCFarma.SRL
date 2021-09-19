import React from "react";
import {RegisterUser} from "../../components/RegisterUser";
import { useUpdatePerfil } from "../../hooks/useUpdatePerfil";

export const PerfilUser = () => {
  const [updateData, handleOnChange, handleOnUpdate] = useUpdatePerfil();

  return (
    <div className="row m-0">
      <div className="mt-5 vh-75 p-5 card container col-md-6 col-sm-12 align-self-center">
        <h4>Perfil de usuario</h4>
        <hr />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre Completo:
          </label>
          <input
            name="user"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={updateData.user}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Direccion de correo Electrónico:
          </label>
          <input
            disabled
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={updateData.email}
          />
        </div>
        {updateData.loading ? (
          <div className="spinner-border mx-auto my-4"></div>
        ) : null}
        <button
          type="button"
          className="btn btn-success my-2"
          onClick={handleOnUpdate}
        >
          Modificar datos
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#registerUser"
        >
          Registrar nuevo usuario
        </button>
        <RegisterUser />
        {updateData.error !== "" ? (
          updateData.error === "success" ? (
            <div className="alert alert-success">Modificación exitosa</div>
          ) : (
            <div className="alert alert-danger">{updateData.error}</div>
          )
        ) : null}
      </div>
    </div>
  );
};
