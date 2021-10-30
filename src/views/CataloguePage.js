import React, { useEffect, useState } from "react";
import { getDocs, collection } from "@firebase/firestore";
import { ModalProduct } from "../components/ModalProduct";
import { db } from "../firebaseConfig";
import { Image } from "../components/Image";

export const CataloguePage = ({ changeLanguage }) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDocs(collection(db, "product")).then((resp) =>{
      setLoading(false);
      setDocs(resp._snapshot.docChanges)
    }
    );
  }, []);
  return (
    <>
      <div className="sticky title"></div>
      <div className="title">
        <h2>{changeLanguage ? "Our Catalogue" : "Nuestro Catalógo"}</h2>
      </div>
      <div className="my-5 mx-auto">
        <div className="row w-100 mx-auto">
          {loading && 
            <div className="row">
              <div className="spinner-grow m-auto"></div>
            </div>
          }
          {docs.map((product, index)=>(
            <div className="col-md-3 mx-auto" key={index}>
              <Image imgString={product.doc.data.value.mapValue.fields.img.stringValue} />
              <h4 className="fs-5 fw-bold">
                {product.doc.data.value.mapValue.fields.name.stringValue}
              </h4>
              <button
                className="btn btnPurple"
                data-bs-toggle="modal"
                data-bs-target={`#${product.doc.data.value.mapValue.fields.name.stringValue.replace(/ /g, "").replace(/ *\([^)]*\) */g, "")}`}
              >
                {changeLanguage ? "See more" : "Ver más"}
              </button>
              <ModalProduct name={product.doc.data.value.mapValue.fields.name.stringValue} changeLanguage={changeLanguage} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
