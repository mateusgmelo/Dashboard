// StatisticsCard.js
import React from 'react';
import { CircularProgress } from '@mui/material';

const StatisticsCard = () => {
  return (
    <div className="statistics-card">
      <h2>Suas estatísticas</h2>
      <div className="stats-content">
        <CircularProgress variant="determinate" value={32} color="secondary" />
        <CircularProgress variant="determinate" value={60} color="primary" />
        <CircularProgress variant="determinate" value={8} color="info" />
      </div>
    </div>
  );
};

export default StatisticsCard;
