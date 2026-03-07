import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Conta from "./pages/Conta";
//import Suporte from './pages/Suporte';
import VerifiqueEmail from "./pages/VerifiqueEmail";
import EsqueciSenha from "./pages/EsqueciSenha";
import ResetarSenha from "./pages/ResetarSenha";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/verifique-email" element={<VerifiqueEmail />}/>
        <Route path="/dasboard" element={<Dashboard/>}/>
        <Route path="/conta" element={<Conta/>}/>
        {/*<Route path="/suporte" element={<Suporte />} />*/}
        <Route path="/esqueci-senha" element={<EsqueciSenha />}/>
        <Route path="/resetar-senha/:token" element={<ResetarSenha />}/>  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
