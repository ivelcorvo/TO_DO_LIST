// #### HOOKS ####
  import { useState } from "react";
  import { useToDoListContext } from "../hook/useToDoListContext";

const Lists = () => {

  const { tarefas, dispatch } = useToDoListContext();

  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("texto: ",texto);

    if (!texto) {
      alert("Digite uma tarefa!");
    } else {

      dispatch({ type: "ADICIONAR", texto }); // dispatch recebeu um objeto (action) com propriedade type contendo o nome da ação

      setTexto("");
    }
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
            <button type="submit" className="bg-blue-300 hover:bg-blue-400 px-2 py-1 rounded-xl shadow-sm hover:cursor-pointer">Adicionar</button>
          </div>
        </form>
      </div>

      {/* ### EDITAR TAREFA ### */}
      <div className="mt-10">
        {tarefas && tarefas.map((tarefa) => (
          <div key={tarefa.id} className="flex flex-col md:flex-row justify-between items-center bg-gray-200 px-3 md:pe-1 md:ps-3 py-1 mt-2 rounded-2xl shadow-sm hover:shadow-black">
            <p className={`${tarefa.feito ? "line-through" : ""} pb-3 md:pb-0`}>{tarefa.texto}</p>
            <div className="flex">

              {/* ### ALTERAR ### */}
              <button
                onClick={() => { dispatch({ type: "ALTERAR", id: tarefa.id }) }}
                className={`${tarefa.feito ? "bg-orange-300 hover:bg-orange-400 " : "bg-blue-300 hover:bg-blue-400"} px-2 py-1 rounded-xl shadow-sm hover:cursor-pointer mr-1`}
              >
                {tarefa.feito ? "Desfazer" : "Concluir"}
              </button>

              {/* ### REMOVER ### */}
              <button
                onClick={() => dispatch({ type: "REMOVER", id: tarefa.id })}
                className="bg-red-400 hover:bg-red-500 px-2 py-1 rounded-xl hover:cursor-pointer shadow-sm"
              >
                Remover
              </button>

            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Lists