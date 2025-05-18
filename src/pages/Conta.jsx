
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import './Conta.css';
import { useUser } from '../services/useUser';

function Conta() {
  const navigate = useNavigate();
  const user = useUser();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="conta-container">
            <Typography className="conta-title" variant="h6">
              Carregando informações do usuário...
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="conta-container">
          <Typography className="conta-title" variant="h5">
            Conta do Usuário
          </Typography>

          <TextField
            label="Nome"
            value={user.name || ""}
            variant="outlined"
            className="conta-input"
            disabled
          />

          <TextField
            label="Email"
            value={user.email || ""}
            variant="outlined"
            className="conta-input"
            disabled
          />

          <Button
            variant="contained"
            className="conta-button"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Conta;

