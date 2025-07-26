111111111111111111111111111111111111111111import { useRef } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  async function handleSubmit(e) {
  e.preventDefault();
  try {
    const { data: token } = await api.post('/login', {
      email: emailRef.current.value,
      password: passwordRef.current.value
    });

    localStorage.setItem('token', token);
    navigate('/dasboard');
  } catch (error) {
    if (error.response && error.response.status === 403) {
      alert("Seu e-mail ainda não foi verificado. Verifique sua caixa de entrada.");
    } else {
      alert("Senha ou e-mail incorretos.");
    }
  }
  }


  return (
    <div className="login-container">
      <div className="login-form">
        <h2>LOGIN</h2>
        <div className="logo">
          <img src="src\assets\Logo.png" alt="Monstack Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              ref={emailRef}
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="input-container">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Senha"
            />
          </div>
          <button className="login-btn">
            ENTRAR
          </button>
        </form>
        <Link to="/">Não tem uma conta? Cadastre-se</Link>
        <div className="divider">
        
        </div>
      </div>
    </div>
  );
};

export default Login;
