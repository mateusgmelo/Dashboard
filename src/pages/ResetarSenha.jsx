import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../src/services/api";
import "./Senha.css";

function ResetarSenha() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    if (novaSenha !== confirmarSenha) {
      setErro("As senhas não coincidem");
      return;
    }

    try {
      const res = await api.post(`/resetar-senha/${token}`, { novaSenha });
      setMensagem(res.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setErro(err.response?.data?.message || "Erro ao redefinir senha");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Redefinir Senha</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button success">
            Redefinir Senha
          </button>
        </form>
        {mensagem && <p className="auth-message success">{mensagem}</p>}
        {erro && <p className="auth-message error">{erro}</p>}
      </div>
    </div>
  );
}

export default ResetarSenha;
