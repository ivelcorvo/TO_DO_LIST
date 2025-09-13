
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// #### PAGES ####
  import Login from "./pages/Login";
  import Cadastrar from "./pages/Cadastrar";
  import Lists from "./pages/Lists";

// #### HOOKS ####
  import { useAuth } from "./hook/useAuth";

// #### COMPONENTES ####


function App() {

  const {user,loading} = useAuth();

  console.log(user);

  if(loading) return <p>Carregando. . .</p>;

  return (
    <div className="bg-gray-200 text-gray-600 flex flex-col h-screen p-0 m-0">
      <main className="flex-grow px-3 py-20">
        <div className="max-w-150 bg-gray-300 rounded-2xl shadow-md p-3 mx-auto">

          <BrowserRouter>
            <Routes>
              <Route path="/login"     element={(!user)?<Login />    :<Navigate to="/lists" />}></Route>
              <Route path="/cadastrar" element={(!user)?<Cadastrar />:<Navigate to="/lists" />}></Route>
              <Route path="/lists"     element={(user)?<Lists />     :<Navigate to="/login" />}></Route>
              <Route path="*"          element={<Navigate to="/login" />}></Route>
            </Routes>
          </BrowserRouter>

        </div>
      </main>
    </div>
  );
}

export default App;
