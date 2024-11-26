// StatisticsCard.js
import React from 'react';
import styles from './StatisticsCard.module.css'; 

const StatisticsCard = () => {
  return (
    <div className={styles.statisticsCard}>
      <div className={styles.realtime}>
        <h3>Energia gerada</h3>
        <div className={styles.energia}>
          <p>120</p><p>kW</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
