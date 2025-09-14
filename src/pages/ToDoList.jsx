// #### HOOKS ####
  import { useEffect, useState } from "react";
  import { useToDoList } from "../hook/useToDoList";
// #### COMPONENTE ####
  import Tarefa from "../component/Tarefa";

const ToDoList = () => {

  const url = "https://to-do-list-35706-default-rtdb.firebaseio.com";

  const {data:toDoData, error, loading, addToDoListData, deleteToDoListData, updateToDoListData} = useToDoList(url);
  
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState(null);

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
          <div>
            <input
              type="text"
              name="texto"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="bg-gray-200 w-full px-3 py-1 rounded-xl shadow-sm"
              placeholder="Digite a tarefa . . ."
            />
          </div>
          <div className="flex justify-end mt-5">
            <button 
              type="submit" 
              className="bg-blue-300 hover:bg-blue-400 px-2 py-0.5 rounded-xl shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            >
              {(loading)?"Atualizando. . .":"Adicionar"}
            </button>
          </div>
        </form>
      </div>

      {/* ### VIZUALIZAR TAREFA ### */}
      <div className="mt-10">
        {/* {loading && <p>Carregando. . .</p>} */}
        {error && <p className="text-red-600">{error}</p>}
        {/* {(!loading&&!error&&tarefas) && tarefas.map((tarefa) => ( */}
        {(!error&&tarefas) && tarefas.map((tarefa) => (
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