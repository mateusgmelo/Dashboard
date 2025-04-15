import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dasboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
