import { createContext,useReducer } from "react";
// O que é o useReducer?
// Ele segue a ideia de Redux, mas dentro do React.
// Em vez de chamar setState, você dispara uma ação (dispatch).
// O estado é atualizado por uma função reducer, que decide como mudar o estado baseado na ação.
// const [state, dispatch] = useReducer(reducer, initialState);
    
// useState → bom quando o estado é simples.

// useReducer → bom quando o estado tem múltiplas ações possíveis.

export const ToDoListContext = createContext();

export const toDoListReducer = (state,action)=>{
    switch(action.type){
        case "ADICIONAR":
            return [...state,{id:Date.now(), texto:action.texto, feito:false}];
        case "ALTERAR":
            return state.map(tarefa=>
                tarefa.id === action.id ?{...tarefa,feito:!tarefa.feito} :tarefa
            );
        case "REMOVER": 
            return state.filter(tarefa=>
                tarefa.id !== action.id
            );
        default:
            return state;

    }
};

export const ToDoListContextProvider = ({children})=>{

    const [tarefas,dispatch] = useReducer(toDoListReducer,[]);
    // Você dispara uma ação com dispatch().
    // O reducer recebe o estado atual e a ação.
    // Ele retorna um novo estado baseado no que aconteceu.

    // O dispatch sempre recebe um objeto chamado ação (action).
    // Esse objeto geralmente tem pelo menos uma propriedade chamada type, que diz ao reducer o que fazer.
    // Ele pode também carregar mais informações (payload), como id, texto, valor, etc.

    return(
        <ToDoListContext.Provider value={{tarefas,dispatch}}>
            {children}
        </ToDoListContext.Provider>
    );
};