import { useState, useEffect } from "react";
import { getDoc, doc } from "@firebase/firestore";
import { db } from "../firebaseConfig";

export const useSetDataInfo = () => {
  const [info, setInfo] = useState({
    mision: "",
    misionTranslate: "",
    vision: "",
    visionTranslate: "",
    values: "",
    valuesTranslate: "",
    history: "",
    historyTranslate: "",
    business: "",
    businessTranslate: "",
    loading: false,
  });

  const getDataInfo = () => {
    const docRef = doc(db, "info", "idInfo");
    setInfo({ ...info, loading: true });
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const {
          mision,
          misionTranslate,
          vision,
          visionTranslate,
          values,
          valuesTranslate,
          history,
          historyTranslate,
          business,
          businessTranslate
        } = docSnap.data();
        setInfo({
          mision,
          misionTranslate,
          vision,
          visionTranslate,
          values,
          valuesTranslate,
          history,
          historyTranslate,
          business,
          businessTranslate,
          loading: false,
        });
      } else {
        setInfo({
          mision: "",
          misionTranslate: "",
          vision: "",
          visionTranslate: "",
          values: "",
          valuesTranslate: "",
          history: "",
          historyTranslate: "",
          business: "",
          businessTranslate: "",
          loading: false,
        });
      }
    });
  };

  useEffect(() => {
    const docRef = doc(db, "info", "idInfo");
    setInfo((data) => ({ ...data, loading: true }));
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const {
          mision,
          misionTranslate,
          vision,
          visionTranslate,
          values,
          valuesTranslate,
          history,
          historyTranslate,
          business,
          businessTranslate,
        } = docSnap.data();
        setInfo({
          mision,
          misionTranslate,
          vision,
          visionTranslate,
          values,
          valuesTranslate,
          history,
          historyTranslate,
          business,
          businessTranslate,
          loading: false,
        });
      } else {
        setInfo({
          mision: "",
          misionTranslate: "",
          vision: "",
          visionTranslate: "",
          values: "",
          valuesTranslate: "",
          history: "",
          historyTranslate: "",
          business: "",
          businessTranslate: "",
          loading: false,
        });
      }
    });
  }, []);

  const handleOnRestart = () => {
    getDataInfo();
  };

  const handleOnClick = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };
  return [info, handleOnClick, handleOnRestart];
};
