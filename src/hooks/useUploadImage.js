import { useState } from "react";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "../firebaseConfig";

export const useUploadImage = () => {
  const [file, setFile] = useState({});

  const [state, setState] = useState({
    success: "",
    error: "",
  });

  const handleOnChange = ({ target }) => {
    if (target.files[0]) {
      setFile(target.files[0]);
    }
  };

  const handleDeleteFile = (refPath) => {
    const imgRef = ref(storage, refPath);
    deleteObject(imgRef).then((resp) => console.log(resp));
    window.location.reload();
  };
  const handleOnUpload = () => {
    if (file.name) {
      const reference = ref(storage, "certificade/" + file.name);
      uploadBytes(reference, file)
        .then(() => {
          setState({
            success: "Imagen cargada exitosamente",
            error: "",
          });
          window.location.reload();
        })
        .catch(() =>
          setState({
            success: "",
            error: "Ocurrio algun error, intentelo mas tarde",
          })
        );
      setFile({});
    } else {
      setState({
        success: "",
        error: "Debe subir una imagen obligatoriamente",
      });
    }
  };

  return [state, handleOnChange, handleOnUpload, handleDeleteFile];
};
