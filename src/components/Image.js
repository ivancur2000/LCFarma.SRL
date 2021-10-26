import React, { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL } from "@firebase/storage";

export const Image = ({ imgString }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storageRef = ref(storage, "product/" + imgString);
    getDownloadURL(storageRef)
      .then((response) => setUrl(response))
      .catch((error) => error.message);
  }, [imgString]);

  return (
    <div>
      <img src={url} alt="farmaco" className="imageProduct m-2" />
    </div>
  );
};
