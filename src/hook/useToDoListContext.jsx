import { useContext } from "react";
import { ToDoListContext } from "../context/ToDoListContext";

export const useToDoListContext = ()=>{
    return useContext(ToDoListContext);
};