import React from "react";
import PropTypes from "prop-types";
import logo from "../public/img/LOGO3.png";
import ankur from "../public/img/ANKUR.jpg";
import globela from "../public/img/globela.jpg";
import indogulf from "../public/img/indogulf.jpg";

import "../public/css/about.css";

export const AboutPage = ({changeLanguage}) => {
  return (
    <>
      <div className="sticky title"></div>
      <div className="title">
        <h2>
          {
            changeLanguage
            ? 'About us'
            : 'Sobre nosotros'
          }
        </h2>
      </div>
      <div className="container my-5">
        <div className="row text-center" id="mision">
          <div className="col-md row-sm">
            <h3>
              {
                changeLanguage
                ? 'Mision'
                : 'Misión'
              }
            </h3>
            <p className="textHistory">
              {
                changeLanguage
                ? 'To be an import company that provides medicines with high quality standards at affordable prices and excellence in service in such a way that we can satisfy the needs of our clients nationwide.'
                : 'Ser una empresa importadora que brinde medicamentos con altos estándares de calidad a precios accesibles y excelencia en servicio de tal manera que podamos satisfacer las necesidades de nuestros clientes a nivel nacional.'
              }
            </p>
          </div>
          <div className="col-md row-sm">
            <h3>
              {
                changeLanguage
                ? 'Visión'
                : 'Vision'
              }
            </h3>
            <p className="textHistory">
              {
                changeLanguage
                ? 'Ser la empresa líder en el mercado ampliando constantemente la cartera de productos ofertados, de tal manera que se satisfaga las necesidades de los clientes importando moléculas nuevas.'
                : 'To be the leading company in the market, constantly expanding the portfolio of products offered, in such a way that the needs of customers are met by importing new molecules.'
              }
            </p>
          </div>
          <hr className="my-5" />
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h3>VALORES</h3>
              <p className="textHistory">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit, consequuntur.
              </p>
              <ul className="textHistory">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, quam? Veniam reiciendis officia alias animi!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  eos velit nostrum accusantium? Debitis blanditiis repellendus
                  in voluptatum dolores doloribus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Neque aliquid natus consectetur eius illum esse velit incidunt
                  quas minus tempore.
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium quam deleniti at? Expedita, mollitia magnam?
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <h3>HISTORIA</h3>
          <img
            src={logo}
            alt="logo"
            className="bgLcFarma img-fluid w-50"
          />
          <p className="textHistory">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            impedit ducimus labore laudantium natus id quidem, fuga repellat quo
            vitae ipsa neque, voluptatem dolore. Nam aut nemo, odit non
            voluptate obcaecati! Excepturi commodi repudiandae itaque at fugit
            nobis sed nostrum veniam, in doloribus ipsam nihil officiis ipsa id
            veritatis provident ratione corporis ut ea temporibus eaque quidem
            quibusdam ex? Ducimus mollitia impedit, sit illum voluptates magni
            tempore blanditiis commodi. Mollitia eum tenetur iusto, dolor iure,
            debitis fugiat asperiores id, consequuntur autem nemo eaque quo
            nihil in sint eos minima dolorem ea ex illo optio ipsam molestias a!
            Itaque eius sed eveniet dolores nostrum, facere magni reprehenderit
            rerum ab est esse dicta nulla inventore veritatis? Hic perspiciatis
            corrupti ut accusantium voluptate delectus, aut commodi sint
            reiciendis eius, repudiandae reprehenderit atque temporibus
            consequuntur molestias sequi, labore repellat vero quidem fugiat
            natus. Ipsam officia molestias porro, vitae consequuntur sequi ipsa
            voluptatum eius doloremque deleniti, atque cum. Quibusdam
            perferendis, dolore facere nesciunt blanditiis necessitatibus
            temporibus in eum illum, officiis voluptate repellendus mollitia
            dignissimos. Et optio reprehenderit consequatur earum quos nam,
            nobis dicta ducimus eligendi tempore accusamus voluptatem doloremque
            quas, aut quo, officiis perferendis repellat error vero facere ad!
            Inventore vel dignissimos error corporis, libero, unde aut
            repellendus quae eaque illum eligendi similique beatae expedita
            aperiam omnis vitae, incidunt voluptates atque? Sunt ea, id dolor
            quia facilis sed quo sint non excepturi tenetur, iste omnis unde
            quae temporibus ab, qui vitae modi eligendi maxime ipsam? Animi
            corrupti maxime obcaecati officiis facere commodi nam id molestias
            necessitatibus perspiciatis, tempore magni a deserunt architecto,
            earum iusto cumque autem consequatur ducimus tempora. Doloribus
            fugit id eum libero eius neque laudantium aut qui vitae illum
            repellat accusamus quam placeat omnis odio pariatur maiores, iste
            cumque amet. Veniam aperiam quae aspernatur, qui eos perspiciatis
            excepturi atque doloremque ab sint consequatur modi omnis explicabo
            odit impedit consectetur obcaecati magni fugiat fugit nam esse
            architecto doloribus! Quas molestiae commodi debitis eius, quisquam
            doloribus hic, provident ipsa temporibus magni, iure a ipsam iste
            nisi totam blanditiis amet quis quibusdam aliquid quia optio
            laborum. Provident deserunt accusamus sint. Fugiat nulla minus quas
            aliquid! Tenetur, accusantium. Totam quis fuga, saepe molestias
            tempore aut qui aspernatur vel iusto ratione doloribus quia! Animi
            id placeat ab. Reprehenderit maiores qui ipsam possimus rerum quae
            consequuntur obcaecati quis perspiciatis. Voluptatibus rerum
            temporibus minima laudantium similique eum obcaecati consequuntur
            tenetur asperiores, fuga sed vel odit excepturi voluptates amet
            debitis, officiis maxime corporis cumque quasi. Modi ipsa corrupti
            eveniet veniam perferendis accusantium accusamus inventore doloribus

          </p>
        </div>
        <hr className="my-5" />
        <div className="row text-center">
          <h3>SOCIOS</h3>
          <div className="col-md">
            <a
              href="http://www.ankurdrugs.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={ankur} alt="ankur" className="imgColaborator" />
            </a>
          </div>
          <div className="col-md">
            <a
              href="https://www.globelapharma.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={globela} alt="globela" className="imgColaborator" />
            </a>
          </div>
          <div className="col-md">
            <a
              href="http://indogulfgroup.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={indogulf} alt="indogulf" className="imgColaborator" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
AboutPage.propTypes = {
  changeLanguage: PropTypes.bool.isRequired
}
