import { auth } from "../firebase/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

export const cadastroUsuario = async(email,password)=>{
  return await createUserWithEmailAndPassword(auth,email,password);
};

export const loginUsuario = async(email,password)=>{
  return await signInWithEmailAndPassword(auth,email,password);
};

export const logoutUsuario = async()=>{
  return await signOut(auth);
};