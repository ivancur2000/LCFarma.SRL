import React from "react";
import img1 from "../public/img/farma1.webp";
import img2 from "../public/img/farma2.webp";
import img3 from "../public/img/farma3.webp";

export const HomePage = () => {
  return (
    <>
      <div
        id="carouselLCFarma"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselLCFarma"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselLCFarma"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselLCFarma"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              alt="Imagen de LCFarma"
              className="d-block vw-100 vh-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              alt="Imagen de LCFarma"
              className="d-block vw-100 vh-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              alt="Imagen de LCFarma"
              className="d-block vw-100 vh-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselLCFarma"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselLCFarma"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
