import { Link } from 'react-router-dom'
import { useState } from 'react';
import logo from "../../public/OlderCommuLOGO.png"
import './Navbar.css';

export default function Navbar(){
  //MenuHamburger บนขวา
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //ไว้สลับค่า True กับ False
  };
  const menuOpen = isMenuOpen ? 'bx-x': "";
  const navOpen = isMenuOpen ? 'open': "";

    return(
        <div>
            <header>
                {/*Logo*/}
                <Link to='/' className='logo' data-aos='flip-left' data-aos-duration='1500'>
                <img src={logo} alt=""/>
                </Link>
                {/*Menu*/}
                <ul className={`nav ${navOpen}`} >
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/Game1' >Store</Link></li>
                <li><Link to='/Game2' >Contact</Link></li>
                <li><Link to='/' >About Us</Link></li>
                </ul>
                {/*Menu-Right*/}
                <div className="nav-right" data-aos='flip-left' data-aos-duration='1000'>
                <Link to='/'><i class="ri-search-line"></i></Link>
                <Link to='/'><i class="ri-shopping-cart-line"></i></Link>
                <Link to='/Register'><i class="ri-user-line"></i></Link>
                <div className={`bx bx-menu ${menuOpen}`} id='menu-icon' onClick={toggleMenu}></div>
                </div>
            </header>
        </div>
    );
}