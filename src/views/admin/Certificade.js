import React from "react";
import { useGetImages } from "../../hooks/useGetImages";
import { useUploadImage } from "../../hooks/useUploadImage";

export const Certificade = () => {
  const [state, handleOnChange, handleOnUpload, handleDeleteFile] =
    useUploadImage();
  const url = useGetImages();

  return (
    <>
      <h1 className="text-center">Lista de certificados</h1>
      <hr />
      <div className="container row mx-auto my-5">
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
        {state.error.trim() && <p>{state.error}</p>}
        {state.success.trim() && <p>{state.success}</p>}
      </div>
      <div className="container row mx-auto my-4 min-vh-100">
        {url.map((img, index) => (
          <div key={index} className="col-md-4 col px-4">
            <img
              className="my-1 imageCert row mx-auto"
              src={img.urlDir}
              alt={img.pathRef}
            />
            <button
              className="row btn btn-danger mx-auto"
              onClick={() => handleDeleteFile(img.pathRef)}
              type="button"
            >
              Borrar Imagen
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
