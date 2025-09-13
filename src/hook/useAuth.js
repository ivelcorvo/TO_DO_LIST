import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const useAuth = ()=>{

  const [user,setUser]       = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      // unsubscribe ja é uma função retornada de onAuthStateChanged
      setUser(currentUser)
      setLoading(false);
    })

    return ()=> unsubscribe();  // cleanup para evitar memory leak
  },[]);

  return {user,loading};
};