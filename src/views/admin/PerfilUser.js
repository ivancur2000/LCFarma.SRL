import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebaseConfig";

export const PerfilUser = () => {
  const auth = getAuth(app);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = auth.currentUser;

    if (user !== null) {
      setUserData({
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
      });
    }
  }, [auth.currentUser]);
  console.log(userData);
  return (
    <div className="row m-0 ">
      <div className="mt-5 container col-md-6 col-sm-12 align-self-center">
        <div className="card">
          <h4>Perfil de usuario</h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre Completo:
            </label>
            <input
              disabled
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Direccion de correo Electronico:
            </label>
            <input
              disabled
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userData.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Direccion de correo Electronico:
            </label>
            <input
              disabled
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userData.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Nombre de usuario:
            </label>
            <input
              type="password"
              className="form-control"
              disabled
              id="exampleInputPassword1"
              value={userData.displayName}
            />
          </div>
          {!userData.emailVerified && (
            <div className="alert alert-danger">Email no validado</div>
          )}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="registerUser"
            className="form-check-input"
          />
          <label htmlFor="registerUser" className="form-check-label text-dark">
            Registrar nuevo usuario?
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          Registrar nuevo usuario
        </button>
        <div className="form-check">
          <input type="checkbox" id="updateUser" className="form-check-input" />
          <label htmlFor="updateUser" className="form-check-label text-dark">
            Modificar datos?
          </label>
        </div>
        <button type="button" className="btn btn-success">
          Modificar datos
        </button>
        <div className="alert alert-danger">error</div>
        <div className="alert alert-success">bien</div>
      </div>
    </div>
  );
};
