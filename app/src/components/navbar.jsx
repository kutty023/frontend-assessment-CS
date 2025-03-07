import "../styles/navbar.css";
import expandDown from '../assets/Expand_down.png';
import bellIcon from '../assets/Bell_icon.png';

function Navbar(){
    const navLinks = ["Service", "Agency", "Case study", "Resources", "Contact"];
    return(
        <div className="container">
            <nav className="navbar-container">
                {/* logo and brand name */}
                <div id="logoBrandname">
                    <div id="logo">
                        <div id="logo-green">
                            <div id="logo-black"></div>
                        </div>
                    </div>
                    <div id="brandName">boostim</div>
                </div>
                {/* navbar links */}
                <div id="navbar-links">
                    <ul>
                        {navLinks.map((item, index) =>(
                            <li key={index}>
                                <div className="nav-items">
                                    <p>{item}</p>
                                    <img src={expandDown} alt={`${item}-dropdown`} />
                                </div> 
                            </li>
                        ))}
                    </ul>
                </div>
                {/* bell notification button */}
                <div id="get-started">
                    <button type="button" id="get-started-btn">Get Started</button>
                    <div id="bell-btn">
                        <div id="bell">
                            <img src={bellIcon} alt="notification bell icon" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;