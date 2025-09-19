import styles from './DataChart.module.css';
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataChart = ({ dados }) => {
  const [deviceSelecionado, setDeviceSelecionado] = useState('1');
  const [paramX, setParamX] = useState('dataHora');
  const [paramY, setParamY] = useState('temperature');
  const [intervalo, setIntervalo] = useState('all');

  // Extrair placas únicas e ordenar
  const placas = [...new Set(dados.map(d => d.device))].sort((a, b) => a - b);

  // Filtrar dados
  const dadosFiltrados = dados.filter(d => {
    if (!deviceSelecionado) return false;
    if (d.device !== Number(deviceSelecionado)) return false;

    const [dia, mes, anoHora] = d.dataHora.split('/');
    const [ano, hora] = anoHora.split(' ');
    const [horaStr, minutoStr, segundoStr] = hora.split(':');
    const data = new Date(`${ano}-${mes}-${dia}T${horaStr}:${minutoStr}:${segundoStr}`);
    const agora = new Date();
    switch (intervalo) {
      case '1h': return data >= new Date(agora.getTime() - 60 * 60 * 1000);
      case '1d': return data >= new Date(agora.getTime() - 24 * 60 * 60 * 1000);
      case '1w': return data >= new Date(agora.getTime() - 7 * 24 * 60 * 60 * 1000);
      case '1mo': return data >= new Date(agora.setMonth(agora.getMonth() - 1));
      case '1y': return data >= new Date(agora.setFullYear(agora.getFullYear() - 1));
      default: return true;
    }
  });

  return (
    <div className={styles.chartContainer}>
      <h3>Gráfico de Dados</h3>

      <div className={styles.controls}>
        <select value={deviceSelecionado} onChange={e => setDeviceSelecionado(e.target.value)}>
          <option value="">Selecione a Placa</option>
          {placas.map(placa => (
            <option key={placa} value={placa}>Placa {placa}</option>
          ))}
        </select>

        <select value={paramX} onChange={e => setParamX(e.target.value)}>
          <option value="dataHora">Data e Hora</option>
          <option value="temperature">Temperatura</option>
          <option value="voltage">Tensão</option>
          <option value="dirt">Sujidade</option>
        </select>

        <select value={paramY} onChange={e => setParamY(e.target.value)}>
          <option value="temperature">Temperatura</option>
          <option value="voltage">Tensão</option>
          <option value="dirt">Sujidade</option>
        </select>

        <select value={intervalo} onChange={e => setIntervalo(e.target.value)}>
          <option value="all">Todos</option>
          <option value="1h">Última Hora</option>
          <option value="1d">Último Dia</option>
          <option value="1w">Última Semana</option>
          <option value="1mo">Último Mês</option>
          <option value="1y">Último Ano</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dadosFiltrados}>
          <Line type="monotone" dataKey={paramY} stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey={paramX} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;
