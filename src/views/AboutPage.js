import React from "react";
import PropTypes from "prop-types";
import logo from "../public/img/LOGO3.png";
import ankur from "../public/img/ANKUR.jpg";
import globela from "../public/img/globela.jpg";
import indogulf from "../public/img/indogulf.jpg";
import { useSetDataInfo } from "../hooks/useSetDataInfo";

import "../public/css/about.css";

export const AboutPage = ({ changeLanguage }) => {
  const [info] = useSetDataInfo();

  return (
    <>
      <div className="title mt-3">
        <h2 className="animate__animated animate__fadeInLeft">{changeLanguage ? "About us" : "Sobre nosotros"}</h2>
      </div>
      <div className="container my-5">
        <div className="row mx-auto">
          <div className="col-md-8">
            <h3 className="title-about">{changeLanguage ? "HISTORY" : "HISTORIA"}</h3>
            {info.loading ? (
              <div className="row">
                <div className="spinner-grow m-auto"></div>
              </div>
            ) : null}
            <p className="textHistory multiLineText">
              {changeLanguage ? info.historyTranslate : info.history}
            </p>
          </div>
          <div className="col-md-4 align-self-center">
            <img src={logo} alt="logo" className="bgLcFarma img-fluid" />
          </div>
        </div>
        <div className="row text-center" id="mision"  data-aos="zoom-in">
          <div className="col-md row-sm">
            <h3 className="title-about">{changeLanguage ? "Mision" : "Misión"}</h3>
            {info.loading ? (
              <div className="row">
                <div className="spinner-grow m-auto"></div>
              </div>
            ) : null}
            <p className="textHistory">
              {changeLanguage ? info.misionTranslate : info.mision}
            </p>
          </div>
          <div className="col-md row-sm">
            <h3 className="title-about">{changeLanguage ? "Vision" : "Visión"}</h3>
            {info.loading ? (
              <div className="row">
                <div className="spinner-grow m-auto"></div>
              </div>
            ) : null}
            <p className="textHistory parraf">
              {changeLanguage ? info.visionTranslate : info.vision}
            </p>
          </div>
          <hr className="my-5" />
          <div className="row justify-content-center" data-aos="zoom-in">
            <div className="col-md-6">
              <h3 className="title-about">{changeLanguage ? "VALUES" : "VALORES"}</h3>
              {info.loading ? (
                <div className="row">
                  <div className="spinner-grow m-auto"></div>
                </div>
              ) : null}
              <p className="multiLineTextLeft">
                {changeLanguage ? info.valuesTranslate : info.values}
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />
        <div className="row text-center">
          <h3 className="title-about">{changeLanguage ? "PARTNERS" : "SOCIOS"}</h3>
          <div className="col-md">
            <a
              href="http://www.ankurdrugs.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={ankur} alt="ankur" className="imgColaborator" />
            </a>
          </div>
          <div className="col-md text-center">
            <a
              href="https://www.globelapharma.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={globela} alt="globela" className="imgColaborator2" />
            </a>
          </div>
          <div className="col-md">
            <a
              href="http://indogulfgroup.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={indogulf} alt="indogulf" className="imgColaborator3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
AboutPage.propTypes = {
  changeLanguage: PropTypes.bool.isRequired,
};
