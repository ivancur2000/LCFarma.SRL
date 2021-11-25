import React from "react";
import { FormContact } from "../components/FormContact";
import { LocationMap } from "../components/LocationMap";
import { useGetWithScreen } from "../hooks/useGetWidthScreen";

import "../public/css/location.css";

export const LocationPage = ({ changeLanguage }) => {

  const width = useGetWithScreen();

  console.log(width);

  return (
    <>
      <div className="title mt-3">
        <h2 className="animate__animated animate__fadeInLeft">
          {changeLanguage ? "Location" : "Ubicación"}
        </h2>
      </div>
      <LocationMap
        changeLanguage={changeLanguage}
        city="LA PAZ"
        address="Calle 21 Achumani Nro. 200 entre Avenida Francia"
        addressTran="Street 21, Achumani # 200"
        phones="2 713644 | 2 713268 | 707 79387"
      >
        <iframe
          title="mapa1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.96053742222!2d-68.07436608513547!3d-16.528089788598813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f218e6967caa9%3A0x11c2467b3094e8bc!2sJMLOGISTIC!5e0!3m2!1ses-419!2sbo!4v1635783106623!5m2!1ses-419!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <LocationMap
        changeLanguage={changeLanguage}
        city="COCHABAMBA"
        address="Calle Idelfonso Murgia S/N entre Tocopilla y Antofagasta"
        addressTran="Idelfonso Murgia Street between Tocopilla and Antofagasta"
        phones="+591 72259459"
      >
        <iframe
          title="mapa2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6572120680294!2d-66.1687380855048!3d-17.38022006857843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3746d43282f5b%3A0xc79f0957691b2a81!2sC.%20Idelfonso%20Murguia%2C%20Cochabamba!5e0!3m2!1ses!2sbo!4v1635209239706!5m2!1ses!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <LocationMap
        changeLanguage={changeLanguage}
        city="SANTA CRUZ"
        address="Av. de Playa el Cambodromo Calle 2 de Agosto Nro. 7"
        addressTran="Av. de Playa el Cambodromo, 2 de Agosto Street # 7"
        phones="60098699-69217031"
      >
        <iframe
          title="mapa3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.924507910613!2d-63.15204358584027!3d-17.748195887863293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e63343a5f7e5%3A0x4e0d3d3de8eb7617!2sCamb%C3%B3dromo!5e0!3m2!1ses!2sbo!4v1636688569777!5m2!1ses!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <LocationMap
        changeLanguage={changeLanguage}
        city="ORURO"
        address="Calle Tacna Y Montecinos Nro. 1167"
        addressTran="Tacna Y Montecinos Street # 1167"
        phones="67238330"
      >
        <iframe
          title="mapa4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.2187036550004!2d-67.10153868583623!3d-17.968559087732842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0b3e145de33%3A0x5920ab66f5ee5867!2sCalle%20Montecinos%201167%2C%20Oruro!5e0!3m2!1ses!2sbo!4v1636688921598!5m2!1ses!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <LocationMap
        changeLanguage={changeLanguage}
        city="POTOSÍ"
        address="Calle 10 de Noviembre Nro. 219"
        addressTran="10 de Noviembre Street, # 219"
        phones="71153927-6457267"
      >
        <iframe
          title="mapa5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.107774472665!2d-65.75278198580492!3d-19.5798828868008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f94e72f530ac09%3A0xb9766dd066fdde9f!2s10%20de%20Noviembre%20219%2C%20Villa%20Imperial%20de%20Potos%C3%AD!5e0!3m2!1ses!2sbo!4v1636689294125!5m2!1ses!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <LocationMap
        changeLanguage={changeLanguage}
        city="SUCRE"
        address="Urbanización Loyola S/N"
        addressTran="Loyola urbanization"
        phones="71153927-6457267"
      >
        <iframe
          title="mapa6"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.122710010777!2d-65.26003148581529!3d-19.05834168709803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf3e45adf5ed%3A0x558b08cd521a81d3!2surbanizacion%20loyola!5e0!3m2!1ses!2sbo!4v1636689491261!5m2!1ses!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <LocationMap
        changeLanguage={changeLanguage}
        city="TARIJA"
        address="Calle Avaroa # 362 Zona Las Panosas"
        addressTran="Avaroa Street # 362, Las Panosas Zone"
        phones="77172947"
      >
        <iframe
          title="mapa7"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.219068422727!2d-64.73267328576354!3d-21.538287785724574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940647e37cc35107%3A0x1b3c79aef607604d!2sAvaroa%20362%2C%20Tarija!5e0!3m2!1ses!2sbo!4v1636689869549!5m2!1ses!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <LocationMap
        changeLanguage={changeLanguage}
        city="COBIJA"
        address="Av. 27 de Mayo S/N"
        addressTran="Av. 27 de Mayo"
        phones="71259201"
      >
        <iframe
          title="mapa8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2252889955644!2d-68.76944278594081!3d-11.021716592155341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917eb12be7aff165%3A0x910beda6d5d931b5!2sAv.%2027%20de%20Mayo%2C%20Cobija!5e0!3m2!1ses!2sbo!4v1636690058102!5m2!1ses!2sbo"
          className="my-2"
          width={width < 500 ? 350 : 450}
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </LocationMap>
      <hr />
      <FormContact changeLanguage={changeLanguage} />
    </>
  );
};
