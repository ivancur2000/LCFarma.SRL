import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

export const useLogin = (email, password) => {
  const [error, setError] = useState({
    errorEmail: false,
    errorPassword: false,
    errorFields: false,
    errorUser: false,
    errorConnection: false,
    success: false,
  });

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleOnLogin = () => {
    const auth = getAuth(app);
    setLoading(true);
    if (email.trim() && password.trim()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
          const { accessToken } = credentials.user;

          localStorage.setItem("token", accessToken);

          setLoading(false);

          setError({
            errorEmail: false,
            errorPassword: false,
            errorFields: false,
            errorUser: false,
            errorConnection: false,
            success: true,
          });

          setTimeout(() => {
            history.push("/home");
            window.location.reload();
          }, 1500);
        })
        .catch((err) => {
          setLoading(false);

          switch (err.code) {
            case "auth/invalid-email":
              setError({
                errorUser: false,
                errorPassword: false,
                errorFields: false,
                errorEmail: true,
                errorConnection: false,
                success: false,
              });
              break;

            case "auth/wrong-password":
              setError({
                errorUser: false,
                errorPassword: true,
                errorFields: false,
                errorEmail: false,
                errorConnection: false,
                success: false,
              });
              break;

            case "auth/user-not-found":
              setError({
                errorUser: true,
                errorPassword: false,
                errorFields: false,
                errorEmail: false,
                errorConnection: false,
                success: false,
              });
              break;
            default:
              setError({
                errorUser: false,
                errorPassword: false,
                errorFields: false,
                errorEmail: false,
                errorConnection: true,
                success: false,
              });
              break;
          }
        });
    } else {
      setLoading(false);
      setError({
        errorUser: false,
        errorPassword: false,
        errorFields: true,
        errorEmail: false,
        errorConnection: false,
        success: false,
      });
    }
  };

  return [error, handleOnLogin, loading];
};
