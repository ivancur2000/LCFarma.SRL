import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

export const useGetImages = () => {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage, "certificade");
    listAll(storageRef).then((resp) => {
      resp.items?.forEach((imgPath) => {
        const imgRef = ref(storage, imgPath.fullPath);
        getDownloadURL(imgRef).then((img) =>
          setUrl((element) => [
            ...element,
            {
              pathRef: imgPath.fullPath,
              urlDir: img,
            },
          ])
        );
      });
    });
  }, []);
  return url;
};
