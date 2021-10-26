import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "@firebase/firestore";
import { ModalAddProduct } from "../../components/ModalAddProduct";
import { db, storage } from "../../firebaseConfig";
import { ModalProduct } from "../../components/ModalProduct";
import { Image } from "../../components/Image";
import { deleteObject, ref } from "@firebase/storage";

import "../../public/css/products.css";

export const Products = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "product")).then((resp) =>
      setDocs(resp._snapshot.docChanges)
    );
  }, []);

  const handleDeleteFile = (path, img) => {
    const imgRef = ref(storage, "product/" + img);
    deleteObject(imgRef).then(() => {
      deleteDoc(doc(db, "product", path)).then(() => window.location.reload());
    });
  };
  return (
    <div className="min-vh-100">
      <h1 className="text-center">Productos</h1>
      <hr />
      <button
        data-bs-toggle="modal"
        data-bs-target="#addProduct"
        className="btn btn-outline-primary m-3"
      >
        Agregar Productos
      </button>
      <ModalAddProduct />

      <div className="row mx-auto my-2">
        {docs.map((product, index) => (
          <div className="col-md-4 mx-auto" key={index}>
            <Image
              imgString={product.doc.data.value.mapValue.fields.img.stringValue}
            />
            <h4 className="fs-5 fw-bold">
              {product.doc.data.value.mapValue.fields.name.stringValue}
            </h4>
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target={`#${product.doc.data.value.mapValue.fields.name.stringValue.replace(/ /g, "")}`}
            >
              Ver detalles
            </button>
            <button
              className="btn btn-danger mx-2"
              type="button"
              onClick={() =>
                handleDeleteFile(
                  product.doc.data.value.mapValue.fields.name.stringValue,
                  product.doc.data.value.mapValue.fields.img.stringValue
                )
              }
            >
              Borrar
            </button>

            <ModalProduct
              name={product.doc.data.value.mapValue.fields.name.stringValue}
              changeLanguage={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
