import "./sidebar.scss"
import geniopay from "../../images/geniopay.png"
import WalletBalance from "../wallet-balance-sidebar/wallet-balance"
import SidebarNav from "../sidebar-nav/sidebar-nav";
import InviteFriends from "../invite-friends/invite-friends";


const Sidebar = () => {
    return ( 
        <div className="sidebar">
              <div className="logo">
              <img src={geniopay}></img>
            </div>
            <WalletBalance/>
            <SidebarNav/>
            <InviteFriends/>
        </div>
     );
}
 
export default Sidebar;