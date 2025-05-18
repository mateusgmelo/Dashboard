import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Conta from "./pages/Conta";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dasboard" element={<Dashboard/>}/>
        <Route path="/conta" element={<Conta/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
