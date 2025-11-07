import Header from "../components/Header";
import MainDashboard from "../components/MainDashboard";
import './Dashboard.css';
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [temAcesso, setTemAcesso] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    const verificarAcesso = async () => {
      try {
        const response = await api.get('/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setTemAcesso(response.data.acesso)
      } catch (err) {
        console.error('Erro ao verificar acesso:', err)
        setTemAcesso(false)
      }
    }

    verificarAcesso()
  }, [])


  return (
    <div className="app">
      <div className="main-content">
        <Header/>
        {temAcesso === null ? (
          <p>Carregando...</p>
        ) : temAcesso ? (
          <MainDashboard />
        ) : (
          <div className="acesso-container">
            <h2>Acesso pendente 🚫</h2>
            <p>Seu acesso ainda não foi liberado pelo administrador.</p>
            <p>Em 5 horas seu Cadastro será removido automaticamente do nosso sistema.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
