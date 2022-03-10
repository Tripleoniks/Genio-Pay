import "./wallet-active.scss"
import payment from "../../images/payment.svg"
import Received from "../../images/Received.svg"
import Chart from "../chart/chart"


const WalletActive = () => {

    const CustomButton = ({children, ...buttonProps}) => {
        return ( 
            <button className= "ledger-custom-button" {...buttonProps}>
                {children}
            </button>
         );
    }

    return ( 
        <div className="wallet-active">
            <div className="wallet-active-details">
                <div className="wallet-active-details-left">
                <p className="act">&#8226; Active</p>
                <p>EUR Wallet</p>
                <p className="curcy">EUR</p>
                </div>
                <div className="wallet-active-details-right">
                    <p>€2,000,000.50</p>
                </div>
            </div>
            <div className="ledger-balance">
                <div className="ledger-balance-left">
                    <p>Ledger Balance &nbsp; &nbsp;  2,000,000.50</p>
                    <p>Blocked Balance &nbsp; &nbsp; €0.00</p>
                </div>
                <div className="ledger-balance-right">
                    <p>Total Incoming  &nbsp; &nbsp;  €2,000,000.50</p>
                    <p>Total Outgoing  &nbsp; &nbsp;  €5,000,000.50</p>
                </div>
            </div>
            <div className="ledger-custom-buttons">
                <CustomButton><img src={payment}/> Payment</CustomButton>
                <CustomButton><img src={Received}/> Pay In</CustomButton>
                <CustomButton><i class="fa-solid fa-arrow-right-arrow-left"></i>Exchange</CustomButton>
            </div>

            <div className="more-options">
                <select name="moreOptions" id="more-options">
                    <option value="more">More Options</option>
                </select>
            </div>

            <Chart />
        </div>
     );
}
 
export default WalletActive;