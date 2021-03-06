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
    getDocs(collection(db, "product")).then((resp) => {
      setLoading(false);
      setDocs(resp._snapshot.docChanges);
    });
  }, []);
  return (
    <>
      <div className="title mt-3">
        <h2 className="animate__animated animate__fadeInLeft">
          {changeLanguage ? "Our Catalogue" : "Nuestro Catalógo"}
        </h2>
      </div>
      <div className="my-5 mx-auto">
        <div className="row max-vw-100 mx-auto">
          {loading && (
            <div className="row">
              <div className="spinner-grow m-auto"></div>
            </div>
          )}
          {docs.map((product, index) => (
            <div className="col-md-3 mx-auto my-2" key={index}>
              <div className="text-center">
                <Image
                  imgString={
                    product.doc.data.value.mapValue.fields.img.arrayValue
                      .values[0].stringValue
                  }
                  name={product.doc.data.value.mapValue.fields.name.stringValue
                    .replace(/ /g, "")
                    .replace(/ *\([^)]*\) */g, "")}
                  className="imageProductModal mx-auto"
                />
              </div>
              <h4 className="fs-5 fw-bold">
                {product.doc.data.value.mapValue.fields.name.stringValue}
              </h4>
              <button
                className="btn btnPurple"
                data-bs-toggle="modal"
                data-bs-target={`#${product.doc.data.value.mapValue.fields.name.stringValue
                  .replace(/ /g, "")
                  .replace(/ *\([^)]*\) */g, "")}`}
              >
                {changeLanguage ? "See more" : "Ver más"}
              </button>
              <ModalProduct
                name={product.doc.data.value.mapValue.fields.name.stringValue}
                dataDoc={product.doc.data.value.mapValue.fields}
                changeLanguage={changeLanguage}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
