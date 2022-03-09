
import whitewallet from "../../images/white-wallet.svg" 
import eye from "../../images/eye.svg"
import star from "../../images/star.svg"
import "./wallet-balance.scss"


const WalletBalance = () => {

    const CustomButton = ({children, pink, white, ...buttonProps}) => {
        return ( 
            <button className= {`${ pink? 'pink' : ''}  ${white ? "white" : ""} wallet-custom-button `} {...buttonProps}>
                {children}
            </button>
         );
    }

    return ( 
        <div className="wallet-balance-box">
        <div className="wallet-balance">
            <div className="white-wallet">
            <img src={whitewallet} />
            </div>
            <div className="wallet-balance-details">
                <p>Wallet Balance</p>
                <p>$15,001.00</p>
            </div>
            <img src={eye} />
        </div>
        <div className="line"></div>
        <div className="awarded-points">
            <div className="points-white-wallet">
            <img src={star} />
            </div>
            <div className="wallet-point-details">
                <p>Awarded Points</p>
                <p>35</p>
            </div>
        </div>
        <div className="line"></div>
        <div className="wallet-btn">
        <CustomButton pink>Pay-In</CustomButton>
        <CustomButton white>Pay-Out</CustomButton>
        </div>

    </div>
     );
}
 
export default WalletBalance;