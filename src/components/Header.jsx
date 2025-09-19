// Header.js
import './Header.css'
import acount from '../assets/acount.svg'
import { useUser } from '../services/useUser';
import { useState } from 'react';
import Sidebar from './Sidebar';
//import Logo from '../assets/Logo.png'

const Header = () => {
  const user = useUser()
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="header">
      
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
      {/*<img src={Logo} alt="Logo Mostack" id='logo' />*/}
      <Sidebar show={showSidebar} />
      <h2><span>Solar</span>stack</h2>
      {user && (<div className="profile">
      <h3>{user.name || ''}</h3>
      <img src={acount}/>
      </div>)}
    </div>
  );
};

export default Header;
