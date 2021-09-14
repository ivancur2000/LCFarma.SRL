import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnClear = () =>{
    setForm(initialState);
  }
  return [form, handleOnChange, handleOnClear];
};
