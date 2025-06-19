import { List, ListItem, ListItemText } from '@mui/material';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = ({ show }) => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: "/dasboard" },
    { label: 'Cadastros' },
    { label: 'Dados completos' },
    { label: 'Customize' },
    { label: 'Configurações' },
    { label: 'Plano de monitoramento' },
    { label: 'Conta', path: '/conta' },
    { label: 'Suporte' },
  ];

  return (
    <div className={`sidebar-dropdown ${show ? 'show' : ''}`}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => item.path && navigate(item.path)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

//esse codigo evita que o vs code fique retornando erro
Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
};