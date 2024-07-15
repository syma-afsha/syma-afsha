import React, {useState} from 'react';

import './Navbar.css';
import linkedinIcon from "./image/linkedin.png";
import researchgateIcon from "./image/researchgate.png";
import mailIcon from './image/mail.png';
import  {GiHamburgerMenu} from 'react-icons/gi';
import googleScholarIcon from "./image/googlescholaricon.png";
import CVIcon from "./image/CVIcon.png"
import { Link } from 'react-router-dom';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="navbar" style={{position: "sticky"}}>
     <div className='logo'><Link style={{textDecoration:"none"}} to="/"><b><span className='color-logo'>S</span >YMA <span className='color-logo1'>A</span>FSHA</b>
      </Link></div> 
    <div className={menuOpen? "menu-link" : "mobile-menu-link"}>
      <ul className="nav-links">
        <li><Link className='navbar-link' to="/">Home</Link></li>
        <li><Link className='navbar-link' to="/about-me"> About</Link></li>
        <li><Link className='navbar-link ' to="/project">Project</Link></li>
        <li><Link className='navbar-link ' to="/research">Research</Link></li>
        <li><Link className='navbar-link ' to="/publication">Publication</Link></li>
        <li><a className='nav-icon' href="mailto: https://mail.google.com/mail/u/0/?tab=km#inbox" target="_blank">
        <img
              src={mailIcon}
              alt="Mail"
              className="navbar-icon"
            />
            </a></li>
        <li><a className='nav-icon' href="https://www.linkedin.com/in/syma-afsha/" target="_blank">
        <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="navbar-icon"
            />
            </a></li>
            <li><a className='nav-icon1' href="https://www.researchgate.net/profile/Syma-Afsha" target="_blank">
        <img
              src={researchgateIcon}
              alt="ResearchGate"
              className="navbar-icon1"
            />
            </a></li>
            <li><a className='nav-icon' href=" https://scholar.google.com/citations?hl=en&user=W-tNEtEAAAAJ" target="_blank">
        <img
              src={googleScholarIcon}
              alt="GoogleScholar"
              className="navbar-icon"
            />
            </a></li>
            <li><a className='nav-icon' href=" https://drive.google.com/file/d/129mDal8P_cEGxH5xxcqBfxBRQvDptgJE/view?usp=sharing" target="_blank">
        <img
              src={CVIcon}
              alt="CV"
              className="navbar-icon"
            />
            </a></li>
         
      </ul>
      </div>
     <div className="hamburger-menu">
      <a href="#" onClick={toggleMenu}> 
      <GiHamburgerMenu/>

      </a>

     </div>
    
    </nav>
  );
}

export default Navbar;