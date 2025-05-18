// Header.js
import './Header.css'
import lupa from '../assets/lupa.png';
import acount from '../assets/acount.svg'
import { useUser } from '../services/useUser';

const Header = () => {
  const user = useUser()

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
      <h3>{user.name || ''}</h3>
      <img src={acount}/>
      </div>)}
    </div>
  );
};

export default Header;
