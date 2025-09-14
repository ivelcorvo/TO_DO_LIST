import { useCallback, useEffect, useState } from "react";
import { apiRequest } from "../api/apiRequest";
import { auth } from "../firebase/firebase";

export const useToDoList = (url) => {

  const [loading, setLoading] = useState(null)
  const [error, setError]     = useState(null)
  const [data, setData]       = useState(null)

  const getToken = async () => {
    if (!auth.currentUser) return null;
    return await auth.currentUser.getIdToken(true);
  };

  // ### BUSCAR DADOS ####
    const getToDoListData = useCallback(async () => {
      setError(null)
      setLoading(true);
      try {
        const token = await getToken();    
        const dat   = await apiRequest(`${url}/users/${auth.currentUser.uid}/tarefas.json`,"GET",null,token);
        setData((dat)?Object.keys(dat).map((k)=>({id:k,...dat[k]})):[]);
        console.log(dat);

        setLoading(false);      
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    },[url]);
    useEffect(()=>{ // busca a primeira vez. quando é montado
      getToDoListData();
    },[getToDoListData])

  // ### INSERIR DADOS ####
    const addToDoListData = async (body) => {
      setError(null)
      setLoading(true);
      try {
        const token = await getToken();    
        await apiRequest(`${url}/users/${auth.currentUser.uid}/tarefas.json`,"POST",body,token);
        await getToDoListData();
        setLoading(false);      
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

  // ### REMOVER DADOS ####
    const deleteToDoListData = async (id) => {
      setError(null)
      setLoading(true);
      try {
        const token = await getToken();    
        await apiRequest(`${url}/users/${auth.currentUser.uid}/tarefas/${id}.json`,"DELETE",null,token);
        await getToDoListData();
        setLoading(false);      
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

  // ### REMOVER DADOS ####
    const updateToDoListData = async (id,update) => {
      setError(null)
      setLoading(true);
      try {
        const token = await getToken();    
        await apiRequest(`${url}/users/${auth.currentUser.uid}/tarefas/${id}.json`,"PATCH",update,token);
        await getToDoListData();
        setLoading(false);      
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };


  return {data, loading, error, getToDoListData, addToDoListData, deleteToDoListData, updateToDoListData};
};