import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useChangeLanguage } from "../hooks/useChangeLanguage";
import { useForm } from "../hooks/useForm";

export const Login = () => {
  const changeLanguage = useChangeLanguage();
  const [error, setError] = useState(false);
  const [form, handleOnChange, handleOnClear] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleOnLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const { accessToken } = credentials.user;
        localStorage.setItem("token", accessToken);
        setError(false);
        window.refresh();
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      <div
        id="login"
        className="modal fade"
        tabIndex="-1"
        aria-labelledby="Login"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Login</h1>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
            </div>
            <div className="modal-body">
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
              <p className="text-danger">
                {error && "Datos erroneos, intentelo de nuevo"}
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                type="button"
                data-bs-dismiss="modal"
                onClick={handleOnClear}
              >
                {changeLanguage ? "Cancel" : "Cancelar"}
              </button>
              <button
                className="btn btn-success"
                type="button"
                onClick={handleOnLogin}
                data-toggle="modal"
              >
                {changeLanguage ? "Login" : "Ingresar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
