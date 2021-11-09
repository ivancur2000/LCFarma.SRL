import React, { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL } from "@firebase/storage";

export const Image = ({ imgString, className, name }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storageRef = ref(storage, `product/${name}/${imgString}`);
    getDownloadURL(storageRef)
      .then((response) => setUrl(response))
      .catch((error) => error.message);
  }, [imgString, name]);

  return (
      <img src={url} alt="farmaco" className={`${className}`} />
  );
};
