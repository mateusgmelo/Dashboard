// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = ['Dashboard', 'Cadastros', 'Dados completos', 'Customize', 'Configurações', 'Plano de monitoramento', 'Conta', 'Suporte'];

  return (
    <div className="sidebar">
      <h2>Monstack </h2>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

