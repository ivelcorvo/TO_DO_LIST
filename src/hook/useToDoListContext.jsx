import { useContext } from "react";
import { ToDoListContext } from "../context/ToDoListContext";

export const useToDoListContext = ()=>{
    const context = useContext(ToDoListContext);

    if(!context){
        console.log("Algo errado com o context");        
    }

    return context;
};