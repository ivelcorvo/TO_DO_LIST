import { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile, 
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

export const useAuthActions = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const cadastroUsuario = async (data) => {
    setError(null);
    setLoading(true)
    try {
      const credencial = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(credencial.user,{displayName:data.name});
      setLoading(false);

      return credencial;
    } catch (error) {
      console.log(error);

      let errorMessage = "";
      switch (error.code){
        case "auth/email-already-in-use":
          errorMessage = "Este e-mail já está cadastrado.";
          break;
        case "auth/invalid-email":
          errorMessage = "Formato de e-mail inválido.";
          break;
      case "auth/operation-not-allowed":
        errorMessage = "Cadastro com e-mail/senha desabilitado.";
        break;
      case "auth/weak-password":
        errorMessage = "A senha deve ter pelo menos 6 caracteres.";
        break;
      default:
        errorMessage = "Ocorreu um erro inesperado. Tente novamente.";
      }
      setError(errorMessage);

      setLoading(false)
    }
  };

  const loginUsuario = async (data) => {
    setError(null);
    setLoading(true)
    try {
      const credencial = await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);

      return credencial;
    } catch (error) {
      console.log(error);

      let errorMessage = "";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "Não existe usuário com esse e-mail.";
          break;
        case "auth/wrong-password":
          errorMessage = "Senha incorreta.";
          break;
        case "auth/invalid-email":
          errorMessage = "E-mail em formato inválido.";
          break;
        case "auth/user-disabled":
          errorMessage = "Conta desativada.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Credenciais inválidas. Verifique e-mail e senha.";
          break;
        default:
          errorMessage = "Ocorreu um erro inesperado. Tente novamente.";
      }
      setError(errorMessage);

      setLoading(false)
    }
  };

  const logoutUsuario = async () => {
    return await signOut(auth);
  };

  return { loading, error, cadastroUsuario, loginUsuario, logoutUsuario };
};