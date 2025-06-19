import Header from "../components/Header";
import MainDashboard from "../components/MainDashboard";
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="app">
      <div className="main-content">
        <Header />
        <MainDashboard />
      </div>
    </div>
  );
}

export default Dashboard;
