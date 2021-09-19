import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig";

export const useSession = () => {
  const history = useHistory();
  const auth = getAuth(app);

  const [user, setUser] = useState({});

  const handleCloseSession = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userCurrent) => {
      if (userCurrent) {
        setUser({
          email: userCurrent.email,
          user: userCurrent.displayName,
          verify: userCurrent.emailVerified,
        });
      } 
    });
  }, [auth]);

  return [user, handleCloseSession];
};
