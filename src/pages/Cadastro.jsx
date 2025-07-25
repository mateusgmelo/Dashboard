import { useRef } from 'react';
import './Cadastro.css';
import api from '../../src/services/api';
import { Link, useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      await api.post('/cadastro', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      alert("Cadastro realizado com sucesso! Verifique seu e-mail e clique no link enviado para ativar sua conta.");
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>CADASTRO</h2>
        <div className="logo">
          <img src="src/assets/Logo.png" alt="Monstack Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              ref={nameRef}
              type="text"
              placeholder="Nome de usuário"
              required
            />
          </div>
          <div className="input-container">
            <input
              ref={emailRef}
              type="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="input-container">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Senha"
              required
            />
          </div>
          <div className="input-container">
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirmar Senha"
              required
            />
          </div>
          <button className="register-btn" type="submit">
            CADASTRAR
          </button>
        </form>
        <Link to="/login">Já tem uma conta? Faça Login</Link>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Cadastro;
