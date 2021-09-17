import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import {
  FaPlaceOfWorship,
  FaBars,
  FaUser,
  FaProductHunt,
} from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import logo from "../public/img/LOGO2.png";
import "../public/css/slidebar.css";

export const SlideBar = () => {
  const history = useHistory();

  const auth = getAuth(app);

  const [emailUser, setEmailUser] = useState("");

  const handleCloseSession = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user.email);
      if (user) {
        setEmailUser(user.email);
      } else {
        setEmailUser("User Default");
      }
    });
  }, [auth]);

  return (
    <>
      <nav className="navbar slidebar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav row-md justify-content-between w-100">
            <a
              className="nav-item p-2 m-2 col-md-3"
              role="button"
              data-bs-toggle="offcanvas"
              href="/#slidebar"
              aria-controls="slidebar"
            >
              <FaBars className="text-light fs-4" />
            </a>
            <li className="nav-item dropdown col-md-3">
              <a
                role="button"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="menuDrop"
              >
                <FaUser className="fs-4 m-2" />
                {emailUser}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="menuDrop"
              >
                <li>
                  <Link to="/perfil" className="dropdown-item">
                    Perfil
                  </Link>
                </li>
                <li>
                  <a href="" className="dropdown-item">
                    Lista de Usuarios
                  </a>
                </li>
                <hr />
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={handleCloseSession}
                  >
                    Cerrar sesion
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="offcanvas text-light offcanvas-start slide"
        id="slidebar"
        tabIndex="-1"
        aria-labelledby="Barra lateral"
      >
        <div className="offcanvas-header">
          <h2>
            <img src={logo} className="w-25" alt="" />
            Farma.SRL
          </h2>
          <button
            type="button"
            className="btn-close bg-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          <div className="p-5">
            <div className="nav flex-column nav-pills">
              <button className="nav-link slideBtn active mt-3">
                <BiHomeAlt />
                Inicio
              </button>
              <button className="nav-link slideBtn active mt-3">
                <BiUserCircle />
                Usuarios
              </button>
              <button className="nav-link slideBtn active mt-3">
                <FaPlaceOfWorship />
                Informacion de la empresa
              </button>
              <button className="nav-link slideBtn active mt-3">
                <FaProductHunt />
                Productos
              </button>
              <button className="nav-link slideBtn active mt-3">
                <MdBusinessCenter />
                Certificados
              </button>
              <div className="nav-link slideBtn active dropend mt-3">
                <a
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CgWebsite />
                  Pagina
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="Paginas"
                >
                  <li className="dropdown-item">Inicio</li>
                  <li className="dropdown-item">Sobre nosostros</li>
                  <li className="dropdown-item">Lo que siga</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
