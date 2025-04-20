import './Header.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="main-header">
        <div className="header-left">
          <img src={logo} alt="Tabibi Logo" className="logo" />
        </div>
        <nav className="header-center">
            <Link to="/home-page2">Home</Link>
            <a href="#">Doctors</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div className="header-right">
        <Link to="/My-account">
            <button className="create-account-btn">My Account</button>
          </Link>
        </div>
      </header>
    );
  }
  
  export default Header;