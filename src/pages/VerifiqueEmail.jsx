import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './VerifiqueEmail.css';

const VerifiqueEmail = () => {
  const email = localStorage.getItem('email');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function reenviarLink() {
    if (!email) return alert("E-mail não encontrado.");
    setLoading(true);
    try {
      const res = await api.post('/reenviar-verificacao', { email });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Erro ao reenviar link.');
    }
    setLoading(false);
  }

  return (
    <div className="verifique-container">
      <div className="verifique-form">
        <h2>VERIFIQUE SEU E-MAIL</h2>
        <div className="logo">
          <img src="src/assets/Logo.png" alt="Monstack Logo" />
        </div>
        <p>Enviamos um link de confirmação para:</p>
        <p><b>{email}</b></p>
        <p>Se não encontrar, verifique também a pasta de spam.</p>
        <p>Caso não confirme o seu E-mail, em 5 horas seu cadastro será removido automaticamente do nosso sistema</p>
        <button 
          className="verifique-btn" 
          onClick={reenviarLink} 
          disabled={loading}
        >
          {loading ? 'Reenviando...' : 'Reenviar link'}
        </button>

        <div className="divider">
          <span>Já confirmou seu e-mail?</span>
          <br />
          <button 
            className="voltar-login" 
            onClick={() => navigate('/login')}
          >
            Ir para Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifiqueEmail;
