import { useState } from "react";
import { app } from "../firebaseConfig";
import { useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword as createUser,
} from "@firebase/auth";

export const useRegisterUser = (email, password, passConfirm) => {
  const [errorRegister, setErrorRegister] = useState({
    error: "",
    success: "",
    loading: false,
  });
  const history = useHistory();

  const handleonRegister = () => {
    const auth = getAuth(app);
    setErrorRegister({
      ...errorRegister,
      loading: true,
    });
    if (email.trim() && password.trim() && passConfirm.trim()) {
      if (password === passConfirm) {
        createUser(auth, email, password)
          .then(() => {
            setErrorRegister({
              error: "",
              success: "Registro exitoso",
            });
            setTimeout(()=>{
              history.push("/home");
              window.location.reload();
            },1500)
          })
          .catch((err) => {
            switch (err.code) {
              case "auth/invalid-email":
                setErrorRegister({
                  success: "",
                  error: "Correo invalido",
                  loading: false,
                });
                break;

              case "auth/email-already-in-use":
                setErrorRegister({
                  success: "",
                  error: "Correo ya registrado",
                  loading: false,
                });
                break;
              case "auth/weak-password":
                setErrorRegister({
                  success: "",
                  error: "Contraseña debil",
                  loading: false,
                });
                break;

              default:
            }
            console.log(err.code);
          });
      } else {
        setErrorRegister({
          error: "Las contraseñas deben coincidir",
          success: "",
          loading: false,
        });
      }
    } else {
      setErrorRegister({
        error: "No puede dejar espacios vacios",
        success: "",
        loading: false,
      });
    }
  };
  return [handleonRegister, errorRegister];
};
