import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuthActions } from "../hook/useAuthActions";

const Login = () => {

  const {error,loading,loginUsuario} = useAuthActions();

  const [email,setEmail]       = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!email || !password){
      alert("Por favor preencha os campos.");
      return;
    }
    
    const data = {
      email,
      password
    };
    // console.log("data",data);

    await loginUsuario(data);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 w-full px-3 py-1 rounded-xl shadow-sm"
            placeholder="Email . . ."
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 w-full px-3 py-1 rounded-xl shadow-sm"
            placeholder="Senha . . ."
          />
        </div>
        <div className="flex justify-end mt-5">
          <button 
            type="submit" 
            className="bg-blue-300 hover:bg-blue-400 px-3 py-1 rounded-xl shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {(loading)?"Entando. . .":"Entrar"}
          </button>
        </div>
      </form>
      <div className="mt-5">
        <p className="text-sm"> Não tem cadastro? <Link to="/cadastrar" className="bg-blue-300 hover:bg-blue-400 px-2 py-0.5 rounded-xl shadow-sm hover:cursor-pointer">Cadastrar</Link></p>
      </div>
      <div>{error && <p className="text-red-600">{error}</p>}</div>
    </div>
  )
}

export default Login