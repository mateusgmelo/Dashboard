import { useState } from "react";
import api from "../../src/services/api";
import "./Senha.css"

function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    try {
      const res = await api.post("/esqueci-senha", { email });
      setMensagem(res.data.message);
    } catch (err) {
      setErro(err.response?.data?.message || "Erro ao solicitar redefinição de senha");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Esqueci minha senha</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button">
            Enviar link de redefinição
          </button>
        </form>
        {mensagem && <p className="auth-message success">{mensagem}</p>}
        {erro && <p className="auth-message error">{erro}</p>}
      </div>
    </div>
  );
}

export default EsqueciSenha;
