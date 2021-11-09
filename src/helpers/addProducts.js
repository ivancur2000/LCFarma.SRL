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
    img: [],
    error: "",
    success: "",
    loading: false,
  });

  const handleOnChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleOnFile = ({ target }) => {
    setForm({ ...form, [target.name]: target.files });
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

    if (form.name.trim() && form.img.length > 0) {
      const name = form.name;

      setForm({
        ...form,
        loading: true,
      });

      let img = [];

      for (let i = 0; i < form.img.length; i++) {
        img = [...img, form.img[i].name];
      }

      const data = {
        name: form.name,
        prinActive: form.prinActive,
        prinActiveTran: form.prinActiveTran,
        treatment: form.treatment,
        treatmentTran: form.treatmentTran,
        dosage: form.dosage,
        dosageTran: form.dosageTran,
        img,
      };

      setDoc(doc(db, "product", name), data).then(() => {
        const nameDoc = form.name
          .replace(/ /g, "")
          .replace(/ *\([^)]*\) */g, "");

        for (let i = 0; i < form.img.length; i++) {
          const reference = ref(
            storage,
            `product/${nameDoc}/${form.img[i].name}`
          );
          uploadBytes(reference, form.img[i])
            .then(() => {
              if (i === form.img.length - 1) {
                window.location.reload();

                setForm({
                  ...form,
                  success: "Proceso exitoso",
                  loading: false,
                });
              }
            })
            .catch((err) => console.log(err));
        }
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
