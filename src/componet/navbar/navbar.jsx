import "./navbar.scss"
import tree from "../../images/Group.svg"
import profileImg from "../../images/Ellipse.png"
import arrow from "../../images/arrow.svg"



const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-left">
                <h4>Welcome, Huss Smith</h4>
            </div>
            <div className="navbar-right">
            <div className="nav-input-div">
                <i className="fa-solid fa-search"></i>
                <input type="text" name="" id="wallet-input"  placeholder="search"/>
                </div>
                <div className="tree">
                <img src={tree} />
                <p>0 planted</p>
                <i class="fa-regular fa-bell"></i>
                </div>
                <div className="profile">
                    <img src={profileImg} alt="" />
                    <div className="profile-left">
                        <p>Verified</p>
                        <p>Huss Smith</p>
                    </div>
                   <img src={arrow} alt="" />
                </div>
            </div>

        </div>
     );
}
 
export default Navbar;