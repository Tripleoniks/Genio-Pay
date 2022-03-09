import WalletActive from "../../componet/wallet-active/wallet-active";
import WalletCard from "../../componet/wallet-cards/wallet-card";
import WalletSearch from "../../componet/wallet-search/wallet-search";
import "./wallet.scss";



const Wallet = () => {
    return ( 
        <div className="main">
         <div className="wallet-text-header">
             <h5>Your Wallet (s) </h5>
             <button><i className="fa-solid fa-plus"></i>Create New Wallet</button>
         </div>
         <div className="wallet-body">
             <WalletSearch/>
             <WalletActive/>
         </div>
        </div>
     );
}
 
export default Wallet;