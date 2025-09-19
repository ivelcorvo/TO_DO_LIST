import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// #### PAGES ####
  import Login from "./pages/Login";
  import Cadastrar from "./pages/Cadastrar";
  import ToDoList from "./pages/ToDoList";

// #### HOOKS ####
  import { useAuth } from "./hook/useAuth";

// #### COMPONENTES ####
 import NavBar from "./component/NavBar";
 import Footer from "./component/Footer";

function App() {

  const {user,loading} = useAuth();
  // console.log(user);

  if(loading) return <p>Carregando. . .</p>;

  return (
    <div className="bg-gray-200 text-gray-200 flex flex-col min-h-screen p-0 m-0">
      {user && <NavBar></NavBar>}

      <div className={`grid flex-grow ${(user)?"grid-cols-1":"grid-cols-1 md:grid-cols-3"} rounded-md`}>
        {!user &&
          <div className="col-span-1 h-full">
            <section className="bg-gray-300 h-full text-gray-600 py-20 px-10 shadow-md">
              <h1 className="text-2xl font-bold text-center mb-10">Bem vindo ao TO DO LIST</h1>
              <p>Aplicação em React que permite aos usuários criar e gerenciar suas próprias listas de tarefas de forma simples e prática. Cada usuário possui login seguro via Firebase Authentication, e as tarefas são salvas, listadas, atualizadas e removidas em tempo real consumindo diretamente a API do Firebase Realtime Database, garantindo que todas as alterações sejam refletidas instantaneamente.</p>
              <br />
              <p>A interface é limpa, responsiva e estilizada com TailwindCSS, oferecendo uma experiência agradável em qualquer dispositivo. O projeto também utiliza Hooks e Context API para manter o código organizado e fácil de manter.</p>
              <br />
              <p>Ideal para demonstrar habilidades em desenvolvimento front-end moderno, consumo de APIs em tempo real e criação de aplicações interativas com autenticação segura.</p>
            </section>
          </div>
        }
        <div className={`rounded-md ${(user)?"col-span-1":"col-span-2"} pt-20 px-3 flex-grow flex flex-col h-screen`}>
          <div className="h-full">
            <div className="max-w-150 bg-gray-300 rounded-2xl shadow-md p-3 mx-auto">
              <BrowserRouter>            
                <Routes>
                  <Route path="/login"     element={(!user)?<Login />     :<Navigate to="/todolist" />}></Route>
                  <Route path="/cadastrar" element={(!user)?<Cadastrar /> :<Navigate to="/todolist" />}></Route>
                  <Route path="/todolist"  element={(user)?<ToDoList />   :<Navigate to="/login" />}></Route>
                  <Route path="*"          element={<Navigate to="/login" />}></Route>
                </Routes>
              </BrowserRouter>
            </div> 
          </div>
          <Footer></Footer>      

        </div>
      </div>
    </div>
  );
}

export default App;
