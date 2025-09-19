import styles from './MaxMinReadingsCard.module.css';
import PropTypes from 'prop-types';

const MaxMinReadingsCard = ({ dados }) => {
  if (!dados || dados.length === 0) return null;

  const maxTemp = dados.reduce((max, item) => item.temperature > max.temperature ? item : max, dados[0]);
  const minTemp = dados.reduce((min, item) => item.temperature < min.temperature ? item : min, dados[0]);
  const maxVolt = dados.reduce((max, item) => item.voltage > max.voltage ? item : max, dados[0]);
  const minVolt = dados.reduce((min, item) => item.voltage < min.voltage ? item : min, dados[0]);

  const renderItem = (label, value, device, dataHora, unit) => (
    <div className={styles.item}>
      <h4>{label}</h4>
      <p>{value} {unit}</p>
      <small className={styles.device}>Placa: {device}</small><br />
      <small>Data/hora: {dataHora}</small>
    </div>
  );

  return (
    <div className={styles.card}>
      <h3>Leituras Máximas e Mínimas</h3>
      <div className={styles.grid}>
        {renderItem('Temp. Máxima', maxTemp.temperature, maxTemp.device, maxTemp.dataHora, '°C')}
        {renderItem('Temp. Mínima', minTemp.temperature, minTemp.device, minTemp.dataHora, '°C')}
        {renderItem('Tensão Máxima', maxVolt.voltage, maxVolt.device, maxVolt.dataHora, 'V')}
        {renderItem('Tensão Mínima', minVolt.voltage, minVolt.device, minVolt.dataHora, 'V')}
      </div>
    </div>
  );
};

export default MaxMinReadingsCard;

MaxMinReadingsCard.propTypes = {
  dados: PropTypes.bool.isRequired,
};