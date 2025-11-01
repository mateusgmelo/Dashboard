// MainDashboard.js
import './MainDashboard.css'
import { useEffect, useState } from 'react';
import api from '../services/api';
import CleanlinessCard from './CleanlinessCard';
import DataChart from './DataChart';
import TestData from './TestData';
import LastReadingsCard from './LastReadingsCard';
import MaxMinReadingsCard from './MaxMinReadingsCard';
import DataTableCard from './DataTableCard';

const MainDashboard = () => {
  const [dados, setDados] = useState([])
  //Codigo do pooling
  useEffect(() => {
    const token = localStorage.getItem('token')

    async function fetchDados() {
      try {
        const response = await api.get('/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setDados(response.data.dados || [])
      } catch (err) {
        console.error("Erro ao buscar dados:", err)
      }
    }

    fetchDados()
    const interval = setInterval(fetchDados, 5000)
    return () => clearInterval(interval)
  }, [])

  //Agora os dados serão passados para os componentes(cards) via props
  return (
    <div className="main-dashboard">
      <div className="dashboard-cards">
        <DataChart dados={dados ? dados: '-'}/>
        <LastReadingsCard dados={dados ? dados: '-'}/>
        <CleanlinessCard dados={dados ? dados: '-'}/>
        <MaxMinReadingsCard dados={dados ? dados: '-'}/>
        <DataTableCard dados={dados ? dados: '-'}/>
      </div>
    </div>
  );
};

export default MainDashboard;
