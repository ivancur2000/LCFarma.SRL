import React from "react";
import Logo from "../public/img/LOGO2.png";

export const AdminFooter = () => {
  return (
    <div className="py-5 bg-dark">
      <div className="container px-5">
        <p className="m-0 text-center text-light">
          <img src={Logo} alt="Logo" className="bg-light rounded p-1 imageFooter" />
          Farma @2021 Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};
