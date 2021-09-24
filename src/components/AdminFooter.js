import React from "react";
import Logo from "../public/img/LOGO2.png";

export const AdminFooter = () => {
  return (
    <div className="py-5 bg-dark">
      <div className="container px-5">
        <p className="m-0 text-center text-light">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/#">
            <img
              src={Logo}
              alt="Logo"
              className=" p-1 imageFooter"
            />
            Farma.SRL
          </a>
        </p>
      </div>
    </div>
  );
};
