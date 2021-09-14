import React from "react";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import { AiOutlineInfoCircle, AiFillSafetyCertificate } from "react-icons/ai";
import { FaProductHunt, FaPlaceOfWorship, FaBars } from "react-icons/fa";
import logo from "../public/img/LOGO2.webp";
import "../public/css/slidebar.css";

export const SlideBar = () => {
  const handleCloseSession = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="navbar slidebar navbar-expand-lg navbar-dark">
        <button
          className="btn btn-primary m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#slidebar"
          aria-controls="slidebar"
        >
          <FaBars />
        </button>
        <div className="dropdown">
          <a role="button" className="link-light" >Perfil</a>
          <ul className="dropdown-menu">
            <li>Perfil</li>
            <li>Lista de usuarios</li>
            <hr />
            <li>Cerrar sesion</li>
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
                Productos
              </button>
              <button className="nav-link slideBtn active mt-3">
                Certificados
              </button>
              <div className="nav-link slideBtn active dropend mt-3">
                <a
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pagina
                </a>
                <ul className="dropdown-menu" aria-labelledby="Paginas">
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
