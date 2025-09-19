// #### HOOKS ####
  import { useEffect, useState } from "react";
  import { useToDoList } from "../hook/useToDoList";
// #### COMPONENTE ####
  import Tarefa from "../component/Tarefa";

const ToDoList = () => {

  const url = "https://to-do-list-35706-default-rtdb.firebaseio.com";

  const {
    data:toDoData, 
    error, 
    loading, 
    addToDoListData, 
    deleteToDoListData, 
    deleteAllToDoListData, 
    updateToDoListData, 
    updateAllToDoListData
  } = useToDoList(url);
  
  const [collapseEditAll, setCollapseEditAll] = useState(false);
  const [texto, setTexto]                     = useState("");
  const [tarefas, setTarefas]                 = useState(null);

  // #### BUSCAR DADOS ####
    useEffect(()=>{
      setTarefas(toDoData);
      // console.log(tarefas);
    },[toDoData]);
    
  // #### ADICIONA DADOS ####
    const handleSubmit = (e) => {
      e.preventDefault();

      if (!texto) {
        alert("Digite uma tarefa!");
        return;
      } 

      const data = {
        texto,
        feito: false
      };

      addToDoListData(data);

      setTexto("");
    }

  return (
    <>
      {/* ### ADICIONAR TAREFA ### */}
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              name="texto"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="bg-gray-200 w-full px-3 py-1 rounded-s-md shadow-sm"
              placeholder="Digite a tarefa . . ."
            />
            <button 
              type="submit" 
              className="bg-gray-400 hover:bg-gray-500 px-2 py-0.5 rounded-e-md shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            >
              {(loading)?"Atualizando...":"Adicionar"}
            </button>
          </div>
        </form>
      </div>

      {/* ### VIZUALIZAR TAREFA ### */}
      <div className="mt-5">
        {/* {loading && <p>Carregando. . .</p>} */}
        {error && <p className="text-red-600">{error}</p>}
        {/* {(!loading&&!error&&tarefas) && tarefas.map((tarefa) => ( */}
        {(!error&&tarefas&&tarefas.length>0) &&
          <>
            <div className="text-center sm:text-end">
              <button          
                className={`bg-gray-400 hover:bg-gray-500 " px-2 py-0.5 rounded-md shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}
                onClick={()=>{setCollapseEditAll(!collapseEditAll)}}
              >
                Aplicar para todos
              </button>
            </div>
            <div className={`${collapseEditAll ? "flex" : "hidden"} flex-row justify-center sm:justify-end items-center gap-1 px-1 py-1 mt-2`}>

              {/* ### ALTERAR TODOS### */}
              <button          
                className={`bg-gray-400 hover:bg-blue-400 " px-2 py-0.5 rounded-md shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}
                onClick={()=>{updateAllToDoListData(true)}}
                disabled={loading}
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button          
                className={`bg-gray-400 hover:bg-orange-400 " px-2 py-0.5 rounded-md shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}
                onClick={()=>{updateAllToDoListData(false)}}
                disabled={loading}
              >
                <i className="fa-solid fa-rotate-left"></i>
              </button>

              {/* ### REMOVER TODOS ### */}
              <button
                className="bg-gray-400 hover:bg-red-500 px-2 py-0.5 rounded-md hover:cursor-pointer shadow-sm  disabled:cursor-not-allowed disabled:opacity-50"
                onClick={()=>{deleteAllToDoListData()}}
                disabled={loading}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </>
        }
        {(!error&&tarefas&&tarefas.length>0) && tarefas.map((tarefa) => (
          <Tarefa 
            key={tarefa.id} 
            tarefa={tarefa} 
            deleteToDoListData={deleteToDoListData}
            updateToDoListData={updateToDoListData}
            loading={loading}
          ></Tarefa>
        ))}
      </div>
    </>
  )
}

export default ToDoList