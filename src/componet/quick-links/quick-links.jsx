import "./quick-links.scss"
import { QuickButton } from "../../static/quick-links-button";

const QuickLinks = () => {
    return ( 
        <div className="quick-link">
             <h3>Quick Links</h3>
             <p>Your frequently used actions for easy access.</p>
            <div className="link-container">
            {QuickButton.map(
                 ({icon, btnText }, index) =>{
                     return(
                         <button className="links-box">
                            <img src={icon} alt="" srcset="" />
                             <p>{btnText}</p>
                         </button>
                     )
                 }
             )}
            </div>
        </div>
     );
}
 
export default QuickLinks;