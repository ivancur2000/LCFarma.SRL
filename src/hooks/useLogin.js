import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

export const useLogin = (email, password) => {
  const [error, setError] = useState({
    errorEmail: false,
    errorPassword: false,
    errorFields: false,
  });

  const history = useHistory();

  const handleOnLogin = () => {
    const auth = getAuth(app);

    if (email.trim() && password.trim()) {

      signInWithEmailAndPassword(auth, email, password)

        .then((credentials) => {
          const { accessToken } = credentials.user;

          localStorage.setItem("token", accessToken);

          setError({
            errorEmail: false,
            errorPassword: false,
            errorFields: false,
          });

          history.push("/home");
          window.location.reload();
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
              setError({ ...error, errorEmail: true });
              break;
            case "auth/wrong-password":
              setError({ ...error, errorPassword: true });
            default:
              break;
          }
        });
    } else {
      setError({ ...error, errorFields: true });
    }
  };

  return [error, handleOnLogin];
};
