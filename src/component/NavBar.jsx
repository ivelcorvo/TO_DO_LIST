import { useAuth } from "../hook/useAuth";
import { useAuthActions } from "../hook/useAuthActions";

const NavBar = () => {

    const {user} = useAuth();
    // console.log(user);

    const {logoutUsuario} = useAuthActions();

  return (
    <header className="w-full fixed bg-gray-300 shadow-md">
        <nav className="p-2 flex flex-row justify-between items-center">
            {user && <h1 className="text-xl">{user.displayName}</h1>}
            <button 
                className="bg-gray-400 hover:bg-gray-500 px-5 py-0.5 rounded-xl shadow-sm hover:cursor-pointer"
                onClick={logoutUsuario}
            >
                <i className="fa-solid fa-right-from-bracket"></i>
            </button>
        </nav>
    </header>
  )
}

export default NavBar