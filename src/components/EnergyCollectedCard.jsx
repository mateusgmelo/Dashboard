// EnergyCollectedCard.js
import React from 'react';
import styles from './EnergyCollectedCard.module.css'; 

const EnergyCollectedCard = () => {
  return (
    <div className={styles.energyCard}>
      <h2>Energia coletada</h2>
      <p>85 Wp</p>
      <span>↓ 2.1% sobre a última semana</span>
    </div>
  );
};

export default EnergyCollectedCard;
