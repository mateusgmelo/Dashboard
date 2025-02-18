import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import styles from './DataChart.module.css'; 

const data = [
  { hora: '08:00', gerada: 30, esperada: 40 },
  { hora: '09:00', gerada: 50, esperada: 55 },
  { hora: '10:00', gerada: 45, esperada: 50 },
  { hora: '11:00', gerada: 60, esperada: 65 },
  { hora: '12:00', gerada: 70, esperada: 75 },
  { hora: '13:00', gerada: 90, esperada: 95 },
  { hora: '14:00', gerada: 100, esperada: 110 }
];

const DataChart = () => {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Comparativo de Energia Gerada</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hora" label={{ value: 'Hora', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Energia (kWh)', angle: -90, position: 'insideLeft' }} />
          <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'black' }} />
          <Legend className={styles.legendWrapper} verticalAlign="top" />
          <Line type="monotone" dataKey="gerada" name="Energia Gerada" stroke="#00366b" />
          <Line type="monotone" dataKey="esperada" name="Energia Esperada" stroke="#ff9900" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;