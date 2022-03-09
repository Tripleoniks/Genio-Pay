import { walletInfo2 } from "../../static/wallet-info";
import "./wallet-search.scss"




const WalletSearch = () => {



    return ( 
           <div className="wallet-search">
             <div className="wallet-row">
               <div className="wallet-input-div">
                <i className="fa-solid fa-search"></i>
                <input type="text" name="" id="wallet-input"  placeholder="search"/>
                </div>
               <select name="currency" id="cureency">
               <option value="all">All</option>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="gbp">GBP</option>
               </select> 
               </div>
               <div className="active-inactive-close">
                   <p>Active (3)</p>
                   <p>Inactive (2)</p>
                   <p>Closed (0)</p>
               </div>
               <div className="wallet-card">
                   {walletInfo2.map(({accountType,accounCurrency,amountAvailable,icon}, index) =>{
                       console.log(index)
                       return(
                           <div key={index} className="wallet-card-details">
                               <div className="wallet-card-details-left">
                                <img src={icon} alt="" srcset="" />
                                <p>{accountType} <br />{accounCurrency}</p>
                               </div>
                               <div className="wallet-card-details-right">
                                <p>{amountAvailable}</p>
                                {index === 0 ? <span>Default</span> : null }
                               </div>
                           </div>
                       )
                   }
                   )}
               </div>
           </div>
     );
}
 
export default WalletSearch;