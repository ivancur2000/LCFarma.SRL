import React, { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL } from "@firebase/storage";

import "../public/css/carouselImg.css";

export const ImageSlider = ({ img, name }) => {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    const nameImg = name.replace(/ /g, "").replace(/ *\([^)]*\) */g, "");

    for (let i = 0; i < img.length; i++) {
      const storageRef = ref(storage, `product/${nameImg}/${img[i].stringValue}`);

      getDownloadURL(storageRef)
        .then((response) => setUrl((urlImg)=> [...urlImg ,response]))
        .catch((error) => error.message);
    }
  }, [img, name]);
  

  console.log('me renderice');
    return (
    <div
      id="carouselExampleControls"
      // className="carousel slide imgSlider"
      // data-bs-ride="carousel"
    >
      {/* <div className="carousel-inner"> */}
        {url.map((urlImg, index) => (
          <div className={` ${index === 0 && 'active'}`} key={index}>
            <img src={urlImg} className="d-block w-100" alt="..." />
          </div>
        ))}
      {/* </div> */}
      {/* <button */}
      {/*   className="carousel-control-prev" */}
      {/*   type="button" */}
      {/*   data-bs-target="#carouselExampleControls" */}
      {/*   data-bs-slide="prev" */}
      {/* > */}
      {/*   <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
      {/*   <span className="visually-hidden">Previous</span> */}
      {/* </button> */}
      {/* <button */}
      {/*   className="carousel-control-next" */}
      {/*   type="button" */}
      {/*   data-bs-target="#carouselExampleControls" */}
      {/*   data-bs-slide="next" */}
      {/* > */}
      {/*   <span className="carousel-control-next-icon" aria-hidden="true" /> */}
      {/*   <span className="visually-hidden">Next</span> */}
      {/* </button> */}
    </div>
  );
};
