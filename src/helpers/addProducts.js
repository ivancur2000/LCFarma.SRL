import { useState } from "react";
import { setDoc, doc } from "@firebase/firestore";
import { ref, uploadBytes } from "@firebase/storage";
import { db, storage } from "../firebaseConfig";

export const useAddProducts = () => {
  const [form, setForm] = useState({
    name: "",
    textActive: "",
    textActiveTran: "",
    prinActive: [],
    prinActiveTran: [],
    treatment: "",
    treatmentTran: "",
    dosage: "",
    dosageTran: "",
    img: {},
    error: "",
    success: "",
  });

  const handleOnChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleOnFile = ({ target }) => {
    setForm({ ...form, [target.name]: target.files[0] });
  };

  const handleOnAdd = () => {
    if (form.textActive.trim()) {
      setForm({
        ...form,
        prinActive: [...form.prinActive, form.textActive],
        textActive: "",
      });
    }
  };

  const handleOnAddTran = () => {
    if (form.textActiveTran.trim()) {
      setForm({
        ...form,
        prinActiveTran: [...form.prinActiveTran, form.textActiveTran],
        textActiveTran: "",
      });
    }
  };

  const handleOnRemove = (act) => {
    const newActive = form.prinActive.filter((activ) => activ !== act);
    setForm({ ...form, prinActive: newActive });
  };

  const handleOnRemoveTran = (act) => {
    const newActive = form.prinActiveTran.filter((activ) => activ !== act);
    setForm({ ...form, prinActiveTran: newActive });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (form.name.trim() && form.img.name) {
      let name = form.name;
      let datos = {
        name: form.name,
        prinActive: form.prinActive,
        prinActiveTran: form.prinActiveTran,
        treatment: form.treatment,
        treatmentTran: form.treatmentTran,
        dosage: form.dosage,
        dosageTran: form.dosageTran,
        img: form.img.name,
      };
      setDoc(doc(db, "product", name), datos).then(() => {
        const reference = ref(storage, "product/" + form.img.name);
        uploadBytes(reference, form.img).then(() => {
          setForm({
            ...form,
            success: "Proceso exitoso",
          });
          window.location.reload();
        });
      });
    } else {
      setForm({
        ...form,
        error: "El nombre y la imagen son obligatorios",
      });
    }
  };

  return {
    handleOnAdd,
    handleOnChange,
    handleOnFile,
    handleOnAddTran,
    handleOnRemove,
    handleOnRemoveTran,
    handleOnSubmit,
    form,
  };
};
