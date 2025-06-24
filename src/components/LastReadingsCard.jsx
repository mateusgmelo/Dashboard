import styles from './LastReadingsCard.module.css';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const LastReadingsCard = ({ dados }) => {
  const [deviceSelecionado, setDeviceSelecionado] = useState('1');

  // Extrai e ordena os devices únicos
  const dispositivos = useMemo(() => {
    const ids = [...new Set(dados.map(d => d.device))];
    return ids.sort((a, b) => a - b);
  }, [dados]);

  // Filtra os dados para o device selecionado
  const ultimoDado = useMemo(() => {
    const filtrados = dados.filter(d => d.device == deviceSelecionado);
    return filtrados[filtrados.length - 1];
  }, [dados, deviceSelecionado]);

  return (
    <div className={styles.container}>
      <h3>Tensão e Temperatura</h3>

      <select
        value={deviceSelecionado}
        onChange={(e) => setDeviceSelecionado(e.target.value)}
        className={styles.select}
      >
        <option value="">Selecione um painel</option>
        {dispositivos.map((dev) => (
          <option key={dev} value={dev}>Painel {dev}</option>
        ))}
      </select>

      {ultimoDado ? (
        <>
          <div className={styles.card}>
            <h3>Tensão</h3>
            <div className={styles.value}>
              <p>{ultimoDado.voltage}</p><p>V</p>
            </div>
          </div>
          <div className={styles.card}>
            <h3>Temperatura</h3>
            <div className={styles.value}>
              <p>{ultimoDado.temperature}</p><p>°C</p>
            </div>
          </div>
        </>
      ) : (
        <p className={styles.info}>Nenhum dado disponível para essa placa.</p>
      )}
    </div>
  );
};

LastReadingsCard.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.shape({
    device: PropTypes.number.isRequired,
    voltage: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
  })).isRequired,
};

export default LastReadingsCard;