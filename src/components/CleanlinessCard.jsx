import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './CleanlinessCard.module.css'; 

const CleanlinessCard = () => {
  const placas = [
    { id: 'Placa 1', percent: 15, alert: true },
    { id: 'Placa 2', percent: 12, alert: true },
    { id: 'Placa 3', percent: 6, alert: false },
    { id: 'Placa 4', percent: 35, alert: true },
  ];

  return (
    <div className={styles.cleanlinessCard}>
      <h2>Sujidade das placas</h2>
      {placas.map((placa) => (
        <div key={placa.id} className={styles.placa}>
          <span>{placa.id}: {placa.percent}%</span>
          {placa.alert ? (
            <WarningIcon className={styles.warningIcon} />
          ) : (
            <CheckCircleIcon className={styles.successIcon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CleanlinessCard;