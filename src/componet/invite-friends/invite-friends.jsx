import "./invite-friends.scss"
import speaker from "../../images/speaker.png"


const InviteFriends = () => {
    return ( 
            <div className="invite-box">
             <div className="invite-content">
             <div className="speaker">
               <img src={speaker} />
               </div>
               <div className="invite-text">
                   <h4>Refer and earn</h4>
                   <p>Use the below link to invite friends</p>
               </div>
             </div>
                <button className="invite-btn">Invite Friends</button>
            </div>
     );
}
 
export default InviteFriends;