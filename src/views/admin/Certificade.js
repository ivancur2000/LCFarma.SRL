import React, { useState } from "react";
import { storage } from "../../firebaseConfig";
import { ref } from "firebase/storage";

export const Certificade = () => {
  const [file, setFile] = useState({});
  const handleOnChange = ({ target }) => {
    if (target.files[0]) {
      setFile(target.files[0]);
    }
  };

  console.log(file);

  const handleOnUpload = () => {
  
  };

  return (
    <>
      <h1 className="text-center">Lista de certificados</h1>
      <div className="container row m-0 my-5">
        <input
          type="file"
          name="certificade"
          id="certificade"
          className="form-control mb-3"
          onChange={handleOnChange}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleOnUpload}
        >
          Subir Certificado
        </button>
      </div>
      <div className="container row m-0 min-vh-100">
        <div></div>
      </div>
    </>
  );
};
