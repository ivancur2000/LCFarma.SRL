import React from "react";
import PropTypes from "prop-types";
import img1 from "../public/img/farma1.jpg";
import img2 from "../public/img/farma2.jpg";
import img3 from "../public/img/farma3.jpg";
import { CarouselItem } from "./CarouselItem";

import "../public/css/carousel.css";

export const Carousel = ({changeLanguage}) => {

  return (
    <>
      <div className="container-filing"></div>
      <div
        id="carouselLCFarma"
        className="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-pause="false"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <CarouselItem img={img1} changeLanguage={changeLanguage} active />
          <CarouselItem img={img2} changeLanguage={changeLanguage} />
          <CarouselItem img={img3} changeLanguage={changeLanguage} />
        </div>
        <button
          className="carousel-control-prev prevItem"
          type="button"
          data-bs-target="#carouselLCFarma"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next nextItem"
          type="button"
          data-bs-target="#carouselLCFarma"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
Carousel.propTypes = {
  changeLanguage: PropTypes.bool.isRequired
}
