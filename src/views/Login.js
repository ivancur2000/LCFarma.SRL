import React from "react";
import { useForm } from "../hooks/useForm";
import { useLogin } from "../hooks/useLogin";
import "../public/css/login.css";

export const Login = ({ changeLanguage }) => {
  const [form, handleOnChange, handleOnClear] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const [error, handleOnLogin, loading] = useLogin(email, password);

  const {
    errorEmail,
    errorPassword,
    errorFields,
    errorUser,
    errorConnection,
    success,
  } = error;

  return (
    <>
      <div className="bgLogin container-fluid row pt-5 vh-100 m-0 p-0">
        <div className="login col-md-5 col-sm-7 col-12 align-self-center mx-auto">
          <h1>Login</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              {changeLanguage ? "Email:" : "Correo Electrónico"}
            </label>
            <input
              type="text"
              name="email"
              className="form-control loginInput"
              id="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              {changeLanguage ? "Password" : "Contraseña"}
            </label>
            <input
              type="password"
              name="password"
              className="form-control loginInput"
              id="password"
              value={password}
              onChange={handleOnChange}
            />
          </div>
          {errorEmail && (
            <p className="alert alert-danger">
              {changeLanguage ? "Invalid Email" : "Correo inválido"}
            </p>
          )}
          {errorPassword && (
            <p className="alert alert-danger">
              {changeLanguage ? "Wrong Password" : "Contraseña incorrecta"}
            </p>
          )}
          {errorFields && (
            <p className="alert alert-danger">
              {changeLanguage
                ? "You cannot leave empty fields"
                : "No puede dejar campos vacios"}
            </p>
          )}
          {errorUser && (
            <p className="alert alert-danger">
              {changeLanguage ? "Unregistered Email" : "Correo no registrado"}
            </p>
          )}
          {errorConnection && (
            <p className="alert alert-danger">
              {changeLanguage ? "Unregistered Email" : "Verifica tu conexión a internet"}
            </p>
          )}

          {success && (
            <p className="alert alert-success">
              {changeLanguage ? "Successful entry" : "Ingreso Exitoso"}
            </p>
          )}
          {loading && (
            <div role="status" className="spinner-border d-block mx-auto my-3">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          <button
            className="btn btnSignIn mx-2"
            type="button"
            onClick={handleOnLogin}
          >
            {changeLanguage ? "Sign In" : "Ingresar"}
          </button>
          <button
            className="btn btnClear mx-2"
            type="button"
            onClick={handleOnClear}
          >
            {changeLanguage ? "Clear" : "Limpiar"}
          </button>
        </div>
      </div>
    </>
  );
};
