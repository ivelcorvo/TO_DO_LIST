import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuthActions } from "../hook/useAuthActions";

const Login = () => {

  const classInput = "bg-gray-200 w-full px-3 py-1 rounded-xl shadow-sm";

  const {error,loading,loginUsuario} = useAuthActions();

  const [email,setEmail]               = useState("");
  const [password,setPassword]         = useState("");
  const [showPassword,setShowPassword] = useState(false);


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

  const handlePreencherCamps = ()=>{
    setEmail("levialves_teste123@gmail.com");
    setPassword("Levi123@");
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
            className={classInput}
            placeholder="Email . . ."
          />
        </div>
        <div className="mb-3 relative">
          <input
            type={(showPassword)?"text":"password"}
            name="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classInput}
            placeholder="Senha . . ."
          />
          <button 
            type="button" 
            className="absolute right-2 top-1 hover:cursor-pointer"
            onClick={()=>setShowPassword(!showPassword)}
          >
            {(showPassword)?<i className="fa-solid fa-eye-slash"></i>:<i className="fa-solid fa-eye"></i>}
          </button>
        </div>
        <div className="flex justify-end mt-5">
          <button 
            type="submit" 
            className="bg-blue-300 hover:bg-blue-400 px-3 py-0.5 rounded-xl shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {(loading)?"Entando. . .":"Entrar"}
          </button>
        </div>
      </form>
      <div className="mt-5 flex items-center">
        <p className="text-sm me-2"> Não tem cadastro? </p>
        <Link to="/cadastrar" className="bg-blue-300 hover:bg-blue-400 px-2 py-0.5 rounded-xl shadow-sm hover:cursor-pointer">Cadastrar</Link>
      </div>
      <div className="mt-5 flex items-center">
        <p className="text-sm me-2"> Deseja testar?</p>
        <button 
          type="submit" 
          className="bg-blue-300 hover:bg-blue-400 px-3 py-0.5 rounded-xl shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          onClick={()=>{handlePreencherCamps()}}
        >
          Testar
        </button>
      </div>
      <div>{error && <p className="text-red-600">{error}</p>}</div>
    </div>
  )
}

export default Login