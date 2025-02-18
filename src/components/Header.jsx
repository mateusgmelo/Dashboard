// Header.js
import './Header.css'
import lupa from '../assets/lupa.png';
import acount from '../assets/acount.svg'

const Header = () => {
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
      <div className="profile"><img src={acount}/></div>
    </div>
  );
};

export default Header;
