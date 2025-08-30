import { useToDoListContext } from "./hook/useToDoListContext";
import { useState } from "react";

function App() {
  const {tarefas,dispatch} = useToDoListContext();
  const [texto,setTexto]   = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    // console.log("texto: ",texto);

    if(!texto){
      alert("Digite uma tarefa!");      
    }else{
      
      dispatch({type:"ADICIONAR",texto}); // dispatch recebeu um objeto (action) com propriedade type contendo o nome da ação

      setTexto("");
    }
  }

  return (
    <div className="bg-gray-900 h-screen p-0 m-0 flex items-center text-white">
      <div className="container mx-auto bg-gray-800 rounded-xl shadow-md p-10 text-center">
        <h1 className="text-2xl font-bold">TO DO LIST</h1>
        
        {/* ### ADICIONAR TAREFA ### */}
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                name="texto"
                value={texto}
                onChange={(e)=>setTexto(e.target.value)}
                className="bg-black w-full p-1 rounded-md"
                placeholder="Digite a tarefa . . ."
              />
            </div>
            <div className="flex justify-end mt-3">
              <button type="submit" className="bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 hover:cursor-pointer">Adicionar</button>
            </div>
          </form>
        </div>

        {/* ### EDITAR TAREFA ### */}
        <div className="mt-10">
          {tarefas && tarefas.map((tarefa)=>(
            <div key={tarefa.id} className="flex justify-between items-center bg-gray-900 p-2 mt-2 rounded-md shadow-sm hover:shadow-orange-100">
              <p className={`${tarefa.feito ?"line-through" :""}`}>{tarefa.texto}</p>
              <div className="flex">

                {/* ### ALTERAR ### */}
                <button onClick={()=>{dispatch({type:"ALTERAR",id:tarefa.id})}} className={`${tarefa.feito?"bg-orange-500 hove:bg-orange-600":"bg-blue-500 hover:bg-blue-600"} px-4 py-2 rounded-xl hover:cursor-pointer mr-1`}>{tarefa.feito ?"Desfazer" :"Concluir"}</button>

                {/* ### REMOVER ### */}
                <button onClick={()=>dispatch({type:"REMOVER",id:tarefa.id})} className="bg-red-500 px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-red-600">Remover</button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
