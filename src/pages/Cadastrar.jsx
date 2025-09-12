import { useState } from "react"

const Cadastrar = () => {

  const [user, setUser]                       = useState("");
  const [email, setEmail]                     = useState("");
  const [password, setPassword]               = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!user || !email || !password || !confirmPassword){
      alert("Por favor preencha os campos.");
      return;
    }

    if(password !== confirmPassword){
      alert("As senhas devem ser iguais.");
      return;
    }

    const data = {
      user,
      email,
      password,
    };
    console.log("data", data);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="bg-gray-200 w-full px-3 py-1 rounded-xl shadow-sm"
            placeholder="Usuário . . ."
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 w-full px-3 py-1 rounded-xl shadow-sm"
            placeholder="E-mail . . ."
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
        <div className="mb-3">
          <input
            type="password"
            name="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-200 w-full px-3 py-1 rounded-xl shadow-sm"
            placeholder="Confirmar senha . . ."
          />
        </div>
        <div className="flex justify-end mt-5">
          <button type="submit" className="bg-blue-300 hover:bg-blue-400 px-3 py-1 rounded-xl shadow-sm hover:cursor-pointer">Cadastrar</button>
        </div>
      </form>
    </div>
  )
}

export default Cadastrar