// MainDashboard.js
import './MainDashboard.css'
import StatisticsCard from './StatisticsCard';
import CleanlinessCard from './CleanlinessCard';
import EnergyCollectedCard from './EnergyCollectedCard';
import DataChart from './DataChart';

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <DataChart />
        <StatisticsCard />
        <CleanlinessCard />
        <EnergyCollectedCard />
      </div>
    </div>
  );
};

export default MainDashboard;
