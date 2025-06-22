// MainDashboard.js
import './MainDashboard.css'
import { useEffect, useState } from 'react';
import api from '../services/api';
import CleanlinessCard from './CleanlinessCard';
import EnergyCollectedCard from './EnergyCollectedCard';
import DataChart from './DataChart';
import TestData from './TestData';
import LastReadingsCard from './LastReadingsCard';

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

  const ultimaLeitura = dados.length > 0 ? dados[dados.length - 1] : null //Variavel que guarda a ultima medição

  //Agora os dados serão passados para os componentes via props, porem talvez seja diferente para o grafico
  return (
    <div className="main-dashboard">
      <div className="dashboard-cards">
        <DataChart />
        <LastReadingsCard voltage={ultimaLeitura ? ultimaLeitura.voltage : '-'} temperature={ultimaLeitura ? ultimaLeitura.temperature : '-'}/>
        <CleanlinessCard dados={dados ? dados: '-'}/>
        <EnergyCollectedCard />
        <TestData dados={dados}/>
      </div>
    </div>
  );
};

export default MainDashboard;
