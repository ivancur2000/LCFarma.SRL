import { useState } from "react";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../firebaseConfig";

export const useUpdateInfo = (info) => {
  const [error, setError] = useState({
    success: "",
    err: "",
  });

  const handleOnUpdate = () => {
    const docGet = doc(db, "info", "idInfo");

    setDoc(docGet, {
      mision: info.mision,
      misionTranslate: info.misionTranslate,
      vision: info.vision,
      visionTranslate: info.visionTranslate,
      values: info.values,
      valuesTranslate: info.valuesTranslate,
      history: info.history,
      business: info.business,
      businessTranslate: info.businessTranslate,
      historyTranslate: info.historyTranslate,
    })
      .then(() =>
        setError({
          err: "",
          success: "Modificacion exitosa",
        })
      )
      .catch((err) => {
        console.log(err.code);
        setError({ err: "Algo salio mal, intentelo mas tarde", success: "" });
      });
  };

  return [error, handleOnUpdate];
};
