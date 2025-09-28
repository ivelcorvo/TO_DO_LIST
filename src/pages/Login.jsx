import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuthActions } from "../hook/useAuthActions";

const Login = () => {

  const classInput = "text-gray-600 bg-gray-200 w-full px-3 py-1 rounded-md shadow-sm";

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
            autoComplete="off"
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
            autoComplete="off"
          />
          <button 
            type="button" 
            className="absolute right-2 top-1 hover:cursor-pointer text-gray-400"
            onClick={()=>setShowPassword(!showPassword)}
          >
            {(showPassword)?<i className="fa-solid fa-eye-slash"></i>:<i className="fa-solid fa-eye"></i>}
          </button>
        </div>
        <div className="flex justify-end mt-5">
          <button 
            type="submit" 
            className="bg-gray-400 hover:bg-gray-500 px-3 py-0.5 rounded-md shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {(loading)?"Entando. . .":"Entrar"}
          </button>
        </div>
      </form>
      <div className="mt-2 flex flex-col sm:flex-row items-baseline justify-start">
        <p className="text-sm me-2 text-gray-600"> Não tem cadastro? </p>
        <Link to="/cadastrar" className="bg-gray-400 hover:bg-gray-500 px-2 py-0.5 rounded-md shadow-sm hover:cursor-pointer">Cadastrar</Link>
      </div>
      <div className="mt-2 flex flex-col sm:flex-row items-baseline justify-start">
        <p className="text-sm me-2 text-gray-600"> Deseja testar?</p>
        <button 
          type="submit" 
          className="bg-gray-400 hover:bg-gray-500 px-3 py-0.5 rounded-md shadow-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
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