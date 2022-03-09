import "./wallet-card.scss"
import { walletInfo } from "../../static/wallet-info";

const WalletCard = () => {

    return(
        <div className="top">
            <div className="wallet-header">
            <h5> Wallet (5) </h5>
            <button>View all wallets</button>
            </div>
            <div className="wallet-info">
            {walletInfo.map(
                ({accountType,accounCurrency,amountAvailable,background,icon}, index) => {
                    return(
                        <div className="wallet-details" style={{backgroundColor: `${background}`}} key={index}>
                            <div className="wallet-left">
                                <p>{accountType}</p>
                                <p>{accounCurrency}</p>
                                <p>{amountAvailable}</p>
                            </div>
                            <div className="wallet-right">
                                <img src={icon} alt="" srcset="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
);
}
  
 
export default WalletCard;