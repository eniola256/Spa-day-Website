import { Link } from "react-router-dom";
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";




function NavBar(){


    const [isOpen, setIsOpen] = useState(false);


    return(
        <>
        <nav >
            <div className='top-bar'>
            <div className='logo rotate nav-link' > <Link to="/"> Logo </Link></div>
            <div className= 'nav-items'>
            <Link to="/" className="nav-link"><span>Home</span></Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/packages" className="nav-link">Packages</Link>
            <Link to="/book" className="nav-link">Book a session</Link>
            
            </div>  
            </div>
            <div className="top-side-bar">
            <div className='logo'> Logo</div>
            <div className="menu-icon">
                    <FontAwesomeIcon icon={faBars} 
                    onClick={() => setIsOpen(true)} />
                </div>

            </div>
             <div className='side-bar' style={{ display: isOpen ? "flex" : "none" }}>
                <FontAwesomeIcon icon={faXmark} className="menu-icon x-icon"  onClick={() => setIsOpen(false)}/>
                <div className= 'nav-items'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/book">Book a session</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
                </div>
      </nav>
      </>
    )
}

export default NavBar