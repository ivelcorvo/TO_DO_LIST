
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
  import { useState } from "react";

// #### COMPONENTES ####


function App() {
  return (
    <div className="bg-gray-200 text-gray-600 flex flex-col h-screen p-0 m-0">
      <main className="flex-grow px-3 py-20">
        <div className="max-w-150 bg-gray-300 rounded-4xl shadow-md p-10 mx-auto">

          <BrowserRouter>
            <Routes>
              <Route path="/login"     element={<Login />}></Route>
              <Route path="/cadastrar" element={<Cadastrar />}></Route>
              <Route path="/lists"     element={<Lists />}></Route>
              <Route path="*"          element={<Navigate to="/login" />}></Route>
            </Routes>
          </BrowserRouter>

        </div>
      </main>
    </div>
  );
}

export default App;
