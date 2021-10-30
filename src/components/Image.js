import React, { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL } from "@firebase/storage";

export const Image = ({ imgString, className }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storageRef = ref(storage, "product/" + imgString);
    getDownloadURL(storageRef)
      .then((response) => setUrl(response))
      .catch((error) => error.message);
  }, [imgString]);

  return (
    <div className="my-auto">
      <img src={url} alt="farmaco" className={`${className}`} />
    </div>
  );
};
