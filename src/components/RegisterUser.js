import React from "react";
import { useForm } from "../hooks/useForm";
import { useRegisterUser } from "../hooks/useRegisterUser";

export const RegisterUser = () => {
  const [form, handleOnChange, handleOnClear] = useForm({
    email: "",
    password: "",
    passConfirm: "",
  });

  const { email, password, passConfirm } = form;

  const [handleonRegister, errorRegister] = useRegisterUser(
    email,
    password,
    passConfirm
  );

  const { success, error, loading } = errorRegister;

  return (
    <div
      className="modal fade"
      id="registerUser"
      tabIndex="-1"
      aria-labelledby="registerUserLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registerUserLabel">
              Registro e ingreso de nuevos usuarios
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              placeholder="Correo electrónico"
              type="text"
              name="email"
              className="form-control mb-3"
              value={email}
              onChange={handleOnChange}
            />
            <input
              placeholder="Contraseña"
              type="password"
              name="password"
              className="form-control mb-3"
              value={password}
              onChange={handleOnChange}
            />

            <input
              id="email"
              placeholder="Confirmar contraseña"
              type="password"
              name="passConfirm"
              className="form-control mb-3"
              value={passConfirm}
              onChange={handleOnChange}
            />
          </div>
          {loading && <div className="spinner-border mx-auto"></div>}
          {success !== "" && (
            <div className="alert alert-success">{success}</div>
          )}
          {error !== "" && <div className="alert alert-danger">{error}</div>}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleonRegister}
            >
              Registrar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleOnClear}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
