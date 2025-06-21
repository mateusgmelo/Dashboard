// MainDashboard.js
import './MainDashboard.css'
import CleanlinessCard from './CleanlinessCard';
import EnergyCollectedCard from './EnergyCollectedCard';
import DataChart from './DataChart';
import TestData from './TestData';
import LastReadingsCard from './LastReadingsCard';

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <DataChart />
        <LastReadingsCard />
        <CleanlinessCard />
        <EnergyCollectedCard />
        <TestData/>
      </div>
    </div>
  );
};

export default MainDashboard;
