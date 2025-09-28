const Tarefa = ({
  tarefa,
  deleteToDoListData,
  updateToDoListData,
  loading
}) => {
  return (
    <li className="grid grid-cols-1 sm:grid-cols-2 items-center bg-gray-200 px-3 sm:pe-1 sm:ps-3 py-1 mt-2 rounded-md shadow-sm hover:shadow-black">
      <div className="col-span-1 text-center sm:text-start"><p className={`${tarefa.feito ? "line-through" : ""} pb-3 sm:pb-0 text-gray-600`}>{tarefa.texto}</p></div>
      <div className="col-span-1 text-center sm:text-end space-x-1">

        {/* ### ALTERAR ### */}
        <button          
          className={`bg-gray-400 ${tarefa.feito ? "hover:bg-orange-400 " : "hover:bg-blue-400"} px-2 py-0.5 rounded-md shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}
          onClick={()=>{updateToDoListData(tarefa.id,{feito:!tarefa.feito})}}
          disabled={loading}
        >
          {tarefa.feito ? <i className="fa-solid fa-rotate-left"></i> : <i className="fa-solid fa-check"></i>}
        </button>

        {/* ### REMOVER ### */}
        <button
          className="bg-gray-400 hover:bg-red-500 px-2 py-0.5 rounded-md hover:cursor-pointer shadow-sm  disabled:cursor-not-allowed disabled:opacity-50"
          onClick={()=>{deleteToDoListData(tarefa.id)}}
          disabled={loading}
        >
          <i className="fa-solid fa-trash"></i>
        </button>

      </div>
    </li>
  )
}

export default Tarefa