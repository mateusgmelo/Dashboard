// Header.js
import './Header.css'
import lupa from '../assets/lupa.png';
import acount from '../assets/acount.svg'
import { useEffect, useState } from "react"
import api from '../services/api';

const Header = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
      async function loadUser() {
          const token = localStorage.getItem('token')
          const { data } = await api.get('/me', {
              headers: { Authorization: `Bearer ${token}` }
          })
          setUser(data) 
      }

      loadUser()
  }, [])

  return (
    <div className="header">
      <form className="search-container">
      <input type="text" id="search-bar" placeholder="Busca" />
      <a href="#">
        <img
          className="search-icon"
          src={lupa}
          alt="Ícone de busca"
        />
      </a>
    </form>
      {user && (<div className="profile">
      <h3>{user.name}</h3>
      <img src={acount}/>
      </div>)}
    </div>
  );
};

export default Header;
