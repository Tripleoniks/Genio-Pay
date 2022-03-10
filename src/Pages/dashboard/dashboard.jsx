import Chart from "../../componet/chart/chart";
import QuickLinks from "../../componet/quick-links/quick-links";
import SidebarNav from "../../componet/sidebar-nav/sidebar-nav";
import WalletCard from "../../componet/wallet-cards/wallet-card";
import "./dashboard.scss";



const Dashboard = () => {
    return ( 
        <div className="dashboard-main">
            <WalletCard/>
            <QuickLinks/>
            <Chart/>
        </div>
     );
}
 
export default Dashboard;