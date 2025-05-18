import { useState, useEffect } from 'react';
import api from '../services/api'; // ajuste o caminho conforme seu projeto

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const { data } = await api.get('/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(data);
      } catch (error) {
        console.error('Erro ao carregar usuário', error);
        setUser(null);
      }
    }

    loadUser();
  }, []);

  return user;
}
