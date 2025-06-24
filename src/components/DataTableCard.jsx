import { useState, useMemo } from 'react';
import styles from './DataTableCard.module.css';
import PropTypes from 'prop-types';

const DataTableCard = ({ dados }) => {
  const [quantidade, setQuantidade] = useState(10);
  const [placaSelecionada, setPlacaSelecionada] = useState('todos');

  const placasDisponiveis = useMemo(() => {
    const devices = dados.map(d => d.device);
    return ['todos', ...new Set(devices)];
  }, [dados]);

  const dadosFiltrados = useMemo(() => {
    let filtrados = [...dados];
    if (placaSelecionada !== 'todos') {
      filtrados = filtrados.filter(d => d.device === Number(placaSelecionada));
    }
    return filtrados.slice(-quantidade).reverse();
  }, [dados, quantidade, placaSelecionada]);

  return (
    <div className={styles.card}>
      <h3>Últimas Leituras</h3>

      <div className={styles.controls}>
        <label>
          Mostrar:
          <select value={quantidade} onChange={e => setQuantidade(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </label>

        <label>
          Painel:
          <select value={placaSelecionada} onChange={e => setPlacaSelecionada(e.target.value)}>
            {placasDisponiveis.map((placa, index) => (
              <option key={index} value={placa}>
                {placa === 'todos' ? 'Todas' : `${placa}`}
              </option>
            ))}
          </select>
        </label>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Painel</th>
            <th>Tensão (V)</th>
            <th>Temperatura (°C)</th>
            <th>Sujidade (lux)</th>
          </tr>
        </thead>
        <tbody>
          {dadosFiltrados.map((dado, index) => (
            <tr key={index}>
              <td>{dado.dataHora}</td>
              <td>{dado.device}</td>
              <td>{dado.voltage}</td>
              <td>{dado.temperature}</td>
              <td>{dado.dirt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableCard;

DataTableCard.propTypes = {
  dados: PropTypes.bool.isRequired,
};