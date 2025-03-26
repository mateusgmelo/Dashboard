import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainDashboard from "../components/MainDashboard";
import './Dashboard.css';

function Dashboard(){
    return(
        <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <MainDashboard />
        </div>
      </div>
    );
};
export default Dashboard;