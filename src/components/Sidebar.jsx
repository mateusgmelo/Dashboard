import { List, ListItem, ListItemText } from '@mui/material';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard'},
    { label: 'Cadastros'},
    { label: 'Dados completos'},
    { label: 'Customize'},
    { label: 'Configurações'},
    { label: 'Plano de monitoramento'},
    { label: 'Conta', path: '/conta' }, // <- aqui está o alvo
    { label: 'Suporte'},
  ];

  return (
    <div className="sidebar">
      <h2>Monstack</h2>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.label} onClick={() => navigate(item.path)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

