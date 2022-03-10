import "./sidebar-nav.scss"
import { Link } from "react-router-dom";




const SidebarNav = () => {
    return ( 
        <div className="sidebar-nav">
            <ul>
                <li> <Link to="/"><i className="fa-solid fa-grip"></i> Dashboard</Link> </li>
                <li><Link to="/wallet"><i className="fa-solid fa-wallet"></i> Wallet</Link></li>
                <li><Link><i className="fa-regular fa-credit-card"></i>Cards</Link></li>
                <li><Link><i className="fa-solid fa-money-check-dollar"></i>FX Centre</Link></li>
                <li><Link><i class="fa-solid fa-users"></i>Beneficiaries</Link></li>
                <li><Link><i className="fa-solid fa-tag"></i>Perks</Link></li>
               
            </ul>
        </div>
     );
}
 
export default SidebarNav;