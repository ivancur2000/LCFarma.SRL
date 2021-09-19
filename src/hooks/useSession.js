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
        setUser(userCurrent);
      } 
    });
  }, [auth]);

  return [user, handleCloseSession];
};
