const Tarefa = ({
  tarefa,
  deleteToDoListData,
  updateToDoListData,
  loading
}) => {
  return (
    // <div className="flex flex-col md:flex-row justify-between items-center bg-gray-200 px-3 md:pe-1 md:ps-3 py-1 mt-2 rounded-2xl shadow-sm hover:shadow-black">
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center bg-gray-200 px-3 md:pe-1 md:ps-3 py-1 mt-2 rounded-2xl shadow-sm hover:shadow-black">
      <div className="col-span-1 text-center sm:text-start"><p className={`${tarefa.feito ? "line-through" : ""} pb-3 md:pb-0`}>{tarefa.texto}</p></div>
      <div className="col-span-1 text-center sm:text-end">

        {/* ### ALTERAR ### */}
        <button          
          className={`${tarefa.feito ? "bg-orange-300 hover:bg-orange-400 " : "bg-blue-300 hover:bg-blue-400"} px-2 py-0.5 rounded-xl shadow-sm hover:cursor-pointer mr-1 disabled:cursor-not-allowed disabled:opacity-50`}
          onClick={()=>{updateToDoListData(tarefa.id,{feito:!tarefa.feito})}}
          disabled={loading}
        >
          {tarefa.feito ? "Desfazer" : "Concluir"}
        </button>

        {/* ### REMOVER ### */}
        <button
          className="bg-red-400 hover:bg-red-500 px-2 py-0.5 rounded-xl hover:cursor-pointer shadow-sm  disabled:cursor-not-allowed disabled:opacity-50"
          onClick={()=>{deleteToDoListData(tarefa.id)}}
          disabled={loading}
        >
          Remover
        </button>

      </div>
    </div>
  )
}

export default Tarefa