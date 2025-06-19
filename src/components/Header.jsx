// Header.js
import './Header.css'
import acount from '../assets/acount.svg'
import { useUser } from '../services/useUser';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Header = () => {
  const user = useUser()
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
      <Sidebar show={showSidebar} />
      <h2>Monstack</h2>
      {user && (<div className="profile">
      <h3>{user.name || ''}</h3>
      <img src={acount}/>
      </div>)}
    </div>
  );
};

export default Header;
