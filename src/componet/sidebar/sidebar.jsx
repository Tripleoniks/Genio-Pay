import "./sidebar.scss"
import geniopay from "../../images/geniopay.png"

import WalletBalance from "../wallet-balance-sidebar/wallet-balance"


const Sidebar = () => {
    return ( 
        <div className="sidebar">
              <div className="logo">
              <img src={geniopay}></img>
            </div>
            <WalletBalance/>
        </div>
     );
}
 
export default Sidebar;