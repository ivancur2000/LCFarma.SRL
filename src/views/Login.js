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

  const [error, handleOnLogin] = useLogin(email, password);

  const { errorEmail, errorPassword, errorFields } = error;

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
              className="form-control"
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
              className="form-control"
              id="password"
              value={password}
              onChange={handleOnChange}
            />
          </div>
          {errorEmail && (
            <p className="alert alert-danger animate__animated animate__animate__backOutDown animate__delay-3s">
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
          <button
            className="btn btn-success mx-2"
            type="button"
            onClick={handleOnLogin}
          >
            {changeLanguage ? "Login" : "Ingresar"}
          </button>
          <button
            className="btn btn-danger mx-2"
            type="button"
            onClick={handleOnClear}
          >
            {changeLanguage ? "Cancel" : "Cancelar"}
          </button>
        </div>
      </div>
    </>
  );
};
