import './Header.css'
import acount from '../assets/acount.svg'
import { useUser } from '../services/useUser';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Logo from '../assets/Logo.png'

const Header = () => {
  const user = useUser()
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="header">
      
      <div className="left-section">
        <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
        <img src={Logo} alt="Logo SolarStack" id="logo" />
        <h2><span>Solar</span>Stack</h2>
      </div>
      <Sidebar show={showSidebar} />
      {user && (<div className="profile">
      <h3>{user.name || ''}</h3>
      <img src={acount}/>
      </div>)}
    </div>
  );
};

export default Header;
