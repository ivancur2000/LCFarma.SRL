import { useState, useEffect } from "react";
import { useSession } from "../hooks/useSession";
import { getAuth, updateProfile } from "@firebase/auth";
import { app } from "../firebaseConfig";

export const useUpdatePerfil = () => {
  const [dataUser] = useSession();

  const [updateData, setUpdateData] = useState({
    user: "",
    email: "",
    loading: true,
    error: "",
  });

  useEffect(() => {
    setUpdateData({
      user: dataUser.user ? dataUser.user : "",
      email: dataUser.email ? dataUser.email : "",
      loading: false,
      error: "",
    });
  }, [dataUser]);

  const handleOnChange = ({ target }) => {
    setUpdateData((values) => ({
      ...values,
      [target.name]: target.value,
    }));
  };

  const handleOnUpdate = () => {
    const auth = getAuth(app);
    updateProfile(auth.currentUser, {
      displayName: updateData.user,
      email: updateData.email,
    })
      .then(() => {
        setUpdateData({
          ...updateData,
          loading: false,
          error: "success",
        });
        window.location.reload();
      })
      .catch(() => {
        setUpdateData({
          ...updateData,
          loading: false,
          error: "Algo salio mal, intentelo mas tarde",
        });
      });
  };

  return [updateData, handleOnChange, handleOnUpdate];
};
