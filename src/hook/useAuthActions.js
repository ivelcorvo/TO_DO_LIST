import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";


export const useAuthActions = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const cadastroUsuario = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUsuario = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUsuario = async () => {
    return await signOut(auth);
  };


  return { loading, error, cadastroUsuario, loginUsuario, logoutUsuario };
};