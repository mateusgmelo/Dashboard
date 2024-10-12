// DataChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: '25°', hours: 24, days: 22 },
  { name: '25,6°', hours: 26, days: 23 },
  // Adicione mais dados conforme necessário
];

const DataChart = () => {
  return (
    <div className="data-chart">
      <BarChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="hours" fill="#8884d8" />
        <Bar dataKey="days" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default DataChart;
