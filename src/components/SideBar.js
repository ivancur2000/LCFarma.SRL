import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { FaPlaceOfWorship, FaProductHunt } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import logo from "../public/img/LOGO2.png";

export const SideBar = () => {
  return (
    <div
      className="offcanvas text-light offcanvas-start slide"
      id="slidebar"
      tabIndex="-1"
      aria-labelledby="Barra lateral"
    >
      <div className="offcanvas-header">
        <h2>
          <img src={logo} className="w-25 bg-light rounded p-1" alt="" />
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
            <button className="btn-slider" data-bs-dismiss="offcanvas" >
              <Link to="/home" className="nav-link slideBtn active mt-3">
                <BiHomeAlt />
                Inicio
              </Link>
            </button>
            <button className="btn-slider" data-bs-dismiss="offcanvas" >
              <Link to="/info" className="nav-link slideBtn active mt-3">
                <FaPlaceOfWorship />
                Información de la empresa
              </Link>
            </button>
            <button className="btn-slider" data-bs-dismiss="offcanvas" >
              <Link to="/products" className="nav-link slideBtn active mt-3">
                <FaProductHunt />
                Productos
              </Link>
            </button>
            <button className="btn-slider" data-bs-dismiss="offcanvas" >
              <Link to="/certificade" className="nav-link slideBtn active mt-3">
                <MdBusinessCenter />
                Certificados
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
